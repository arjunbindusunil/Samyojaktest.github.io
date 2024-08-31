const mqtt = require('mqtt');

const clientId = 'your-client-id';
const topic = 'your-topic-name';
const brokerUrl = 'wss://your-iot-core-endpoint.iot.your-region.amazonaws.com/mqtt';

const client = mqtt.connect(brokerUrl, {
  clientId,
  clean: true,
});

const publishBtn = document.getElementById('publish-btn');
const messageInput = document.getElementById('message');
const messagesDiv = document.getElementById('messages');

publishBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (message) {
    client.publish(topic, message, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Message published: ${message}`);
        messagesDiv.innerHTML += `<p>Published: ${message}</p>`;
        messageInput.value = '';
      }
    });
  }
});
