const fs = require("fs");
const data = fs.readFileSync("todo.json", "utf-8");
const obj = JSON.parse(data);
const command = process.argv[2], id = process.argv[3], inform = process.argv.slice(3).join(" ");
let objIndex = id - 1, count = obj.length + 1;

if (!command || command.toLowerCase() == "help") {
    console.log(`>>> JS TODO <<<
node challenge#13.js <command>
node challenge#13.js list
node challenge#13.js task <task_id>
node challenge#13.js add <task_conten>
node challenge#13.js delete <task_id>
node challenge#13.js complete <task_id>
node challenge#13.js uncomplete <task_id>
node challenge#13.js list:outstanding asc|desc
node challenge#13.js list:completed asc|desc
node challenge#13.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
node challenge#13.js filter:<tag_name>`)
} else {
    switch (command.toLowerCase()) {
        case "list":
            console.log("Daftar Pekerjaan")
            for (let task of obj) {
                if (task.complete) {
                    task.complete = "[x]"
                    console.log(`${task.ID}. ${task.complete} ${task.title}.`)
                } else if (!task.complete) {
                    task.complete = "[ ]"
                    console.log(`${task.ID}. ${task.complete} ${task.title}.`)
                }
            }; break;
        case "task":
            for (let task in obj[objIndex]) console.log(`${task}: ${obj[objIndex][task]}`);
            break;
        case "add":
            if (inform) {
                console.log(`"${inform}" telah ditambahkan.`);
                obj.push({ "ID": count, "title": inform, "complete": false, tag: "" });
                fs.writeFileSync("todo.json", JSON.stringify(obj), "utf-8")
            } else if (!inform || inform == " ") return
            break;
        case "delete":
            console.log(`"${obj[objIndex].title}" telah dihapus dari daftar.`);
            obj.splice(objIndex, 1);
            for (let i = 0; i < obj.length; i++) obj[i].ID = i + 1
            fs.writeFileSync("todo.json", JSON.stringify(obj), "utf-8");
            break;
        case "complete":
            console.log(`"${obj[objIndex].title}" telah selesai.`);
            obj[objIndex].complete = true;
            fs.writeFileSync("todo.json", JSON.stringify(obj), "utf-8");
            break;
        case "uncomplete":
            console.log(`"${obj[objIndex].title}" status selesai dibatalkan.`);
            obj[objIndex].complete = false;
            fs.writeFileSync("todo.json", JSON.stringify(obj), "utf-8");
            break;
        case "list:outstanding":
            console.log("Daftar Pekerjaan")
            let outstanding = [];
            for (let task of obj) {
                if (!task.complete) {
                    task.complete = "[ ]";
                    outstanding.push(`${task.ID}. ${task.complete} ${task.title}.`);
                }
            }
            if (id == "asc") console.log(outstanding.join("\n"));
            else if (id == "desc") console.log(outstanding.reverse().join("\n"));
            break;
        case "list:completed":
            console.log("Daftar Pekerjaan")
            let completed = [];
            for (let task of obj) {
                if (task.complete) {
                    task.complete = "[x]";
                    completed.push(`${task.ID}. ${task.complete} ${task.title}.`);
                }
            }
            if (id == "asc") console.log(completed.join("\n"));
            else if (id == "desc") console.log(completed.reverse().join("\n"));
            break;
        case "tag":
            console.log(`Tag "${process.argv.slice(4)}" telah ditambahkan ke dalam daftar '${obj[objIndex].title}'`);
            obj[objIndex].tag = process.argv.slice(4);
            fs.writeFileSync("todo.json", JSON.stringify(obj), "utf-8");
            break;
        case `filter:${command.slice(7)}`:
            console.log("Daftar Pekerjaan");
            for (let task of obj) {
                if (task.tag.includes(command.slice(7))) {
                    if (task.complete) {
                        task.complete = "[x]"
                        console.log(`${task.ID}. ${task.complete} ${task.title}.`)
                    } else if (!task.complete) {
                        task.complete = "[ ]"
                        console.log(`${task.ID}. ${task.complete} ${task.title}.`)
                    }
                }
            }
    }
}