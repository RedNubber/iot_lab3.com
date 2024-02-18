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


                          $(document).ready(function(){
                            var database = firebase.database();
                            var Led1Status;
                            var Led2Status;
                            var Led3Status;
                            var Led4Status;
                            database.ref().on("value", function(snap){
                              Led1Status = snap.val().Led1Status;
                              Led2Status = snap.val().Led2Status;
                              Led3Status = snap.val().Led3Status;
                              Led4Status = snap.val().Led4Status;
                              if(Led1Status == "1"){
                                document.getElementById("unact").style.display = "none";
                                document.getElementById("act").style.display = "block";
                              } else {
                                document.getElementById("unact").style.display = "block";
                                document.getElementById("act").style.display = "none";
                              }
                              if(Led2Status == "1"){
                                document.getElementById("unact1").style.display = "none";
                                document.getElementById("act1").style.display = "block";
                              } else {
                                document.getElementById("unact1").style.display = "block";
                                document.getElementById("act1").style.display = "none";
                              }
                              if(Led3Status == "1"){
                                document.getElementById("unact2").style.display = "none";
                                document.getElementById("act2").style.display = "block";
                              } else {
                                document.getElementById("unact2").style.display = "block";
                                document.getElementById("act2").style.display = "none";
                              }
                              if(Led4Status == "1"){
                                document.getElementById("unact3").style.display = "none";
                                document.getElementById("act3").style.display = "block";
                              } else {
                                document.getElementById("unact3").style.display = "block";
                                document.getElementById("act3").style.display = "none";
                              }
                            });
                          
                            $(".toggle-btn").click(function(){
                              var firebaseRef = firebase.database().ref().child("Led1Status");
                              if(Led1Status == "1"){
                                firebaseRef.set("0");
                                Led1Status = "0";
                              } else {
                                firebaseRef.set("1");
                                Led1Status = "1";
                              }
                            })
                            $(".toggle-btn1").click(function(){
                              var firebaseRef = firebase.database().ref().child("Led2Status");
                              if(Led2Status == "1"){
                                firebaseRef.set("0");
                                Led2Status = "0";
                              } else {
                                firebaseRef.set("1");
                                Led2Status = "1";
                              }
                            })
                            $(".toggle-btn2").click(function(){
                              var firebaseRef = firebase.database().ref().child("Led3Status");
                              if(Led3Status == "1"){
                                firebaseRef.set("0");
                                Led3Status = "0";
                              } else {
                                firebaseRef.set("1");
                                Led3Status = "1";
                              }
                            })
                            $(".toggle-btn3").click(function(){
                              var firebaseRef = firebase.database().ref().child("Led4Status");
                              if(Led4Status == "1"){
                                firebaseRef.set("0");
                                Led4Status = "0";
                              } else {
                                firebaseRef.set("1");
                                Led4Status = "1";
                              }
                            })
                          });
                          
                          
                
