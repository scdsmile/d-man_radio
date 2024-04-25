        document.getElementById('radio-btn').addEventListener('click', function() {
            document.getElementById('radio-container').style.visibility = 'visible';
            document.getElementById('game-container').style.visibility = 'hidden';
            document.getElementById('unity-container').style.visibility = 'hidden';
        });

        document.getElementById('game-btn').addEventListener('click', function() {
            document.getElementById('radio-container').style.visibility = 'hidden';
            document.getElementById('game-container').style.visibility = 'visible';
            document.getElementById('unity-container').style.visibility = 'visible';
        });
