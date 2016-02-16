#!/bin/bash

node display-server & node coordinator & node console-input & ./dist/nw display-client/ && fg
