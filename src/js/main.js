window.onload = function(){
    //send images to server 
    axios.get('http://localhost:3400/uploads', {
        submission: {
        images:[] 
        }
    })
    .then(function (response) {
        console.log('get response: ',response);
    })
    .catch(function (error) {
        console.log(error);
    });

}