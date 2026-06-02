async function sendMessage() {

    const idInstance =
        document.getElementById("idInstance").value;

    const apiToken =
        document.getElementById("apiToken").value;

    const phone =
        document.getElementById("phone").value;

    const message =
        document.getElementById("message").value;

    const response = await fetch(
        `https://4100.api.green-api.com/waInstance${idInstance}/sendMessage/${apiToken}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chatId: `${phone}@c.us`,
                message: message
            })
        }
    );

    const data = await response.json();

    document.getElementById("response").value =
        JSON.stringify(data, null, 2);
}
async function getStateInstance() {

    const idInstance =
        document.getElementById("idInstance").value;

    const apiToken =
        document.getElementById("apiToken").value;

    const response = await fetch(
        `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiToken}`
    );

    const data = await response.json();

    document.getElementById("response").value =
        JSON.stringify(data, null, 2);
}
async function getSettings() {

    const idInstance =
        document.getElementById("idInstance").value;

    const apiToken =
        document.getElementById("apiToken").value;

    const response = await fetch(
        `https://4100.api.green-api.com/waInstance${idInstance}/getSettings/${apiToken}`
    );

    const data = await response.json();

    document.getElementById("response").value =
        JSON.stringify(data, null, 2);
}
async function sendFileByUrl() {

    const idInstance =
        document.getElementById("idInstance").value;

    const apiToken =
        document.getElementById("apiToken").value;

    const phone =
        document.getElementById("phone").value;

    const fileUrl =
        document.getElementById("fileUrl").value;

    const response = await fetch(
        `https://4100.api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiToken}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chatId: `${phone}@c.us`,
                urlFile: fileUrl,
                fileName: "file.pdf"
            })
        }
    );

    const data = await response.json();

    document.getElementById("response").value =
        JSON.stringify(data, null, 2);
}