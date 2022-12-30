const AWS = require('aws-sdk');

AWS.config.update({region: 'ap-southeast-1'})

AWS.config.credentials = new AWS.Credentials({
  accessKeyId: "",
  secretAccessKey: ""
})

const sqs = new AWS.SQS({apiVersion: '2012-11-05'})


const queueUrls=[
"QUEUE"
    ]

queueUrls.forEach((queueUrl) => {
      const params = {
        QueueUrl: queueUrl
      };
      sqs.receiveMessage(params, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Received message from queue ${queueUrl}`);
          const message = data.Messages[0]
          const body = JSON.parse(message.Body)
          for(badan of body){
            console.log(badan,"<<<NAME")
          }
          }
    });
});