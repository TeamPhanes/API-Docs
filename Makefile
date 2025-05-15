REGISTRY := harbor.phanescloud.com

GIT_SHA ?= $(shell git rev-parse --short HEAD)

IMAGE_NAME := api-docs
IMAGE_PROJECT := replay
IMAGE_TAG := $(BRANCH)-$(GIT_SHA)
IMAGE := $(REGISTRY)/$(IMAGE_PROJECT)/$(IMAGE_NAME):$(IMAGE_TAG)

npm-install:
	npm install

npm-lint: npm-install
	npm run lint

npm-build: npm-lint
	npm run build

docker-build:
	docker build --network host -t ${IMAGE} .

docker-push: docker-build
	docker push ${IMAGE}