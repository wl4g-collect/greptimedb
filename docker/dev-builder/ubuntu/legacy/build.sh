#!/usr/bin/env bash

set -e

RUST_TOOLCHAIN=$1
IMAGE_REGISTRY=$2
IMAGE_NAMESPACE=$3
BUILDX_BUILDER_NAME=$4
BUILDX_MULTIPLE_PLATFORM=$5
VERSION_FILE=docker/dev-builder/ubuntu/legacy/version.csv

tail -n +2 "$VERSION_FILE" | while IFS=, read -r Version Adjective Animal GlibcVersion OnlyAMD64
do
    echo "Version: $Version, Adjective: $Adjective, Animal: $Animal, GlibcVersion: $GlibcVersion, OnlyAMD64: $OnlyAMD64"
    if [ "$BUILDX_MULTIPLE_PLATFORM" = "true" ] && [ "$OnlyAMD64" = "true" ]; then
        BUILDX_MULTI_PLATFORM_BUILD_OPTS="--platform=linux/amd64 --push"
    elif [ "$BUILDX_MULTIPLE_PLATFORM" = "true" ] && [ "$OnlyAMD64" = "false" ]; then
        BUILDX_MULTI_PLATFORM_BUILD_OPTS="--platform linux/amd64,linux/arm64 --push"
    else
      BUILDX_MULTI_PLATFORM_BUILD_OPTS="-o type=docker"
    fi

    docker buildx build --builder "$BUILDX_BUILDER_NAME" \
      --build-arg="RUST_TOOLCHAIN=$RUST_TOOLCHAIN" \
      --build-arg="VERSION=$Version" \
      --build-arg="ADJECTIVE=$Adjective" \
      -f docker/dev-builder/ubuntu/legacy/Dockerfile \
      -t "$IMAGE_REGISTRY"/"$IMAGE_NAMESPACE"/dev-builder-legacy:ubuntu-"$Version"-"$GlibcVersion" $BUILDX_MULTI_PLATFORM_BUILD_OPTS ./docker/dev-builder/ubuntu/legacy
done
