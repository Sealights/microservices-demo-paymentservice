docker build -t paymentservice .
docker tag paymentservice:latest 159616352881.dkr.ecr.eu-west-1.amazonaws.com/microservices-demo-paymentservice:latest
docker push 159616352881.dkr.ecr.eu-west-1.amazonaws.com/microservices-demo-paymentservice:latest
