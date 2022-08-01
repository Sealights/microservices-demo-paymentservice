// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const path = require('path');
const pino = require('pino');

const charge = require('./charge');
const express = require("express");
const bodyParser = require("body-parser");

const startHttpServer = () => {
  const logger = pino({
    name: 'paymentservice-server',
    messageKey: 'message',
    levelKey: 'severity',
    useLevelLabels: true
  });

  const app = express()
  const port = 7001

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())


  app.post('/convert', (req, res) => {
    try {
      logger.info(`PaymentService#Charge invoked with request ${JSON.stringify(req.body)}`);
      const response = charge(req.body);
      return res.send(response);
    } catch (err) {
      console.warn(err);
    }
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

module.exports = { startHttpServer }
