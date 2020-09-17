const formData = {
    imageSrc: 'uploads',
    title: 'Arthur Balayan',
    text: 'I love You'
};

fetch('http://localhost:5000/admin/api/home', {
    method: 'POST',
    body: JSON.stringify(formData)
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    }).catch(e => console.log(e));