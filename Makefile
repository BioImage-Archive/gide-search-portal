BASEDIR = $(shell pwd)

.PHONY: image

image.update:
	docker buildx build --platform linux/amd64 -t ghcr.io/bioimage-archive/gide-search-portal:0.1.0 --push .
