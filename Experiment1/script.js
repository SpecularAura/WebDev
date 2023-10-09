const moduleForm = document.getElementById("module-form");
function handleModulePReference(e) {
    e.preventDefault();
    const preferences = {};
    const namePrefix = "module";
    const noOfModules = 6;

    for(var i = 0; i < noOfModules; i++)
    {
        const module = `${namePrefix}${i+1}`;
        preferences[module] = document.getElementById(module).checked;
    }

    // window.open("pages/AdvancedReact.html")
    const newDocument = document.implementation.createHTMLDocument("Hi There");
    console.log(newDocument);
    // const newPage = window.open();
    // newPage.document.write(newDocument);
    console.log(document.getRootNode());
    const root = document.getRootNode();
    console.log(document.getRootNode().childNodes);
    root.replaceChild(newDocument.getRootNode().childNodes[1], document.getRootNode().childNodes[1]);
}
moduleForm.addEventListener("submit", handleModulePReference)