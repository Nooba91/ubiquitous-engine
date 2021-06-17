Webcam.set({
     width:350,
     height:300, 
     image_format : 'png', 
     png_quality:90 
    });
    cam = document.getElementById("camera"); 
    Webcam.attach('#camera'); 
    function takeSnapshot() { 
        Webcam.snap(function(data_uri) {
             document.getElementById("output").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; 
            }); 
        }
     console.log('ml5 version:', ml5.version); 
     classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aiMdu7VzF/model.json',modelLoaded);
    function modelLoaded() { 
        console.log('Model Loaded!'); 
    }
     function identifyImage(){
         var img = document.getElementById("captured_image");
         document.getElementById("load").style.display = "block";
         classifier.classify(img, gotResults);
     }
     function gotResults(error, results){
         if(error){
             console.error(error);
         }else{
             console.log(results);
             document.getElementById("result_person").innerHTML = results[0].label;
             document.getElementById("result_confidence").innerHTML = results[0].confidence.toFixed(2);
             document.getElementById("load").style.display = "none";
         }
     }