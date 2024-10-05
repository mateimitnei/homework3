const newArr = [...data];
const allImages = transformData();

(function(){
    let btn = document.getElementById("play"),
        firstBlock = document.querySelector('#first-line'),
        secondBlock = document.querySelector('#second-line'),
        thirdBlock = document.querySelector('#third-line');

    function init() {
        // Values from the select boxes
        const method = document.getElementById('type-selector').value;
        let numberOfItems = document.getElementById('line-selector').value;
        if (numberOfItems === "0") // All images
            numberOfItems = allImages.length;
        else if (numberOfItems === "1") // 3 images
            numberOfItems = 3;
        else if (numberOfItems === "2") // 6 images
            numberOfItems = 6;
        // Determine which method of building the gallery needs to be used
        // Replace method
        if (method === "1") {
            document.querySelector('.first-group').classList.replace("hide","show");
            document.querySelector('.second-group').classList.replace("show","hide");
            document.querySelector('.third-group').classList.replace("show","hide");

            firstBlock.innerHTML = '';
            for (let index = 0; index < numberOfItems; index++) {
                const item = allImages[index];
                const replaceItems =
                    '<div class="col-lg-3 col-md-6">\
                        <img src="$url" alt="$name" class="img-thumbnail">\
                        <div class="info-wrapper">\
                            <div class="text-muted">$name</div>\
                            <div class="text-muted top-padding">$description</div>\
                            <div class="text-muted">$date</div>\
                        </div>\
                    </div>';
                firstBlock.innerHTML += replaceItems
                    .replace(/\$name/gi, item.name)
                    .replace("$url", item.url)
                    .replace("$description", item.description)
                    .replace("$date", item.date);
            }
        }
        // Strings method
        else if (method === "2") {
            document.querySelector('.first-group').classList.replace("show","hide");
            document.querySelector('.second-group').classList.replace("hide","show");
            document.querySelector('.third-group').classList.replace("show","hide");

            secondBlock.innerHTML = '';
            for (let index = 0; index < numberOfItems; index++) {
                const item = allImages[index];
                secondBlock.innerHTML +=
                    `<div class="col-sm-3 col-xs-6">\
                        <img src="${item.url}" alt="${item.name}" class="img-thumbnail">\
                        <div class="info-wrapper">\
                            <div class="text-muted">${item.name}</div>\
                            <div class="text-muted top-padding">${item.description}</div>\
                            <div class="text-muted">${item.date}</div>\
                        </div>\
                    </div>`;
            }
        }
        else if (method === "3") {
            document.querySelector('.first-group').classList.replace("show","hide");
            document.querySelector('.second-group').classList.replace("show","hide");
            document.querySelector('.third-group').classList.replace("hide","show");

            thirdBlock.innerHTML = '';
            for (let index = 0; index < numberOfItems; index++) {
                const item = allImages[index];

                const imageContainer = document.createElement("div");
                imageContainer.classList.add("col-sm-3", "col-xs-6");
                const image = document.createElement("img");
                image.src = item.url;
                image.alt = item.name;
                image.classList.add("img-thumbnail");
                const infoBox = document.createElement("div");
                infoBox.classList.add("info-wrapper");
                const title = document.createElement("div");
                title.textContent = item.name;
                title.classList.add("text-muted");
                const description = document.createElement("div");
                description.textContent = item.description;
                description.classList.add("text-muted", "top-padding");
                const date = document.createElement("div");
                date.textContent = item.date;
                date.classList.add("text-muted");

                infoBox.appendChild(title);
                infoBox.appendChild(description);
                infoBox.appendChild(date);

                imageContainer.appendChild(image);
                imageContainer.appendChild(infoBox);

                thirdBlock.appendChild(imageContainer);
            }
        }
    }

    btn.addEventListener("click", init);
})()

function transformData() {
    const filteredArr = newArr.map(function(item){
        const tmpDate = new Date(item.date);
        return {
            name : item.name[0].toUpperCase() + item.name.slice(1).toLowerCase(),
            url : "http://" + item.url,
            description : item.description.slice(0, 15) + "...",
            date : tmpDate.getFullYear() + "/" +
                tmpDate.getMonth() + "/" +
                tmpDate.getDate() + " " +
                tmpDate.getHours() + ":" +
                tmpDate.getMinutes(),
        }
    })
    return filteredArr;
}

function printToConsole(array) {
    console.log("new", array);
}
