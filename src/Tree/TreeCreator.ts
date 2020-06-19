import { Node } from "./NodeModel";
import { Tree } from "./TreeModel";

window.onload = () => {
    const treeObj = ReadJSON();
    console.log(treeObj);
};

function ReadJSON()
{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/file.json");
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const jsonObj = JSON.parse(xhr.responseText);
                const root = CreateTree(jsonObj.NIDocument);
            } else {
                alert("Could not load file");
            }
        }
    };
}

function CreateTree(jsonObj) {
    const div = document.createElement("div");
    let li = document.createElement("li");
    li.innerHTML = jsonObj.Path;

    for (const element of jsonObj.Components) {
        let child = li.appendChild(document.createElement("li"));
        child.innerHTML = element.Path;
    }
    div.appendChild(li);
    document.body.appendChild(div);
    // const tree = new Tree();
    // tree.root = new Node(jsonObj.root, jsonObj.ID);
    // for (const element of jsonObj.components) {
    //     let node = null;
    //     if (element.components) {
    //         node = CreateTree(element);
    //     }
    //     node = new Node(element.root, element.ID);
    //     tree.components.push(node);
    // }
    // return tree.root;
}
