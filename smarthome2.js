const firebaseConfig = {
    apiKey: "AIzaSyDPYEo-0iFcIQb0sE3nr9PzYT9yO_sGsW8",
    authDomain: "tt-iot-e73f6.firebaseapp.com",
    databaseURL: "https://tt-iot-e73f6-default-rtdb.firebaseio.com",
    projectId: "tt-iot-e73f6",
    storageBucket: "tt-iot-e73f6.appspot.com",
    messagingSenderId: "689884482105",
    appId: "1:689884482105:web:9244fb0a915a3f76aadbe8"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  //////////////////Cap nhat nhiet do/////////////////////////////
firebase.database().ref("/TT_IoT/Temp").on("value", function(snapshot){
    var Temp = snapshot.val();
    setGaugeValue2(gaugeElement2, Temp);
    document.getElementById("nhietdo").innerHTML = Temp;
    console.log(Temp);
  });
  /////////////////Cap nhat do am////////////////////////////////
  firebase.database().ref("/TT_IoT/Humi").on("value", function(snapshot){
    var Humi = snapshot.val();
    setGaugeValue(gaugeElement, Humi);
    document.getElementById("doam").innerHTML = Humi;
    console.log(Humi);
  });
  /////////////////Cap nhat gas////////////////////////////////
  firebase.database().ref("/TT_IoT/Gas").on("value", function(snapshot){
    var Gas = snapshot.val();
    setGaugeValue3(gaugeElement3, Gas);
    document.getElementById("gas").innerHTML = Gas;
    console.log(Gas);
  });
  /////////////////Cap nhat anh sang////////////////////////////////
  firebase.database().ref("/TT_IoT/LightSensor").on("value", function(snapshot){
    var Light = snapshot.val();
    setGaugeValue4(gaugeElement4, Light);
    document.getElementById("anhsang").innerHTML = Light;
    console.log(Light);
  });
  

  
                            const gaugeElement = document.querySelector(".gauge");
                            const gaugeElement2 = document.querySelector(".gauge2");
                            const gaugeElement3 = document.querySelector(".gauge3");
                            const gaugeElement4 = document.querySelector(".gauge4");


                            function setGaugeValue(gauge, value){
                                gauge.querySelector(".gauge-fill").style.transform = `rotate(${value / 200}turn)`;
                                gauge.querySelector(".gauge-cover").textContent = `${value}%`;
                            }
                            function setGaugeValue2(gauge, value){
                                gauge.querySelector(".gauge-fill2").style.transform = `rotate(${value / 100}turn)`;
                                gauge.querySelector(".gauge-cover2").textContent = `${value} độ C`;
                            }
                            function setGaugeValue3(gauge, value){
                                gauge.querySelector(".gauge-fill3").style.transform = `rotate(${value / 9200}turn)`;
                                gauge.querySelector(".gauge-cover3").textContent = `${value}`;
                            }
                            function setGaugeValue4(gauge, value){
                                gauge.querySelector(".gauge-fill4").style.transform = `rotate(${(4096-value) / 9200}turn)`;
                                gauge.querySelector(".gauge-cover4").textContent = `${4096-value}`;
                            }
                            
                            
                  
