    // JavaScript code to handle the button click event
    document.getElementById('submitButton').addEventListener('click', function() {
        // Get the value of the input field
        var inputValue = document.getElementById('inputField').value;

        // the URL with the success parameter
        var url = '/thank-you?success=true&inputValue=' + encodeURIComponent(inputValue);

        // Redirect to the new URL
        window.location.href = url;
    });