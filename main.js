camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'png',
    jpeg_quality: 90
});

function webcam.snap()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('')