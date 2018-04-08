/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.vibrate);
}

    

function game(){


    let guess = prompt('Enter random number between 1 and 10.');
    if (guess == null || guess == ''){
        navigator.vibrate(90);
        alert('Looks like you didn\'t enter anything');
        game();
    }
    if (parseInt(guess) > 10){
        navigator.vibrate(90);
        alert('You entered a number larger than 10');
        game();
    }
    if (parseInt(guess) === number ) {
        attempts++;
        if (attempts > 1){
    alert('You are correct. ' + attempts + ' tries.');
        }
        else if (attempts == 1){
            alert('Great! You guessed the number on your first try!');
        }
    location.reload();
    } if (parseInt(guess) > number ){
        attempts++;
        alert('guessed too high. try lower');
        game();
    } if (parseInt(guess) < number ){
        attempts++;
        alert('guessed too low. try higher');
        game();
    }
    
}


let attempts = 0;
    let number = Math.floor(Math.random() * 10 ) + 1;
    game();
