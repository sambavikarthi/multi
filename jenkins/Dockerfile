# Stage 1: Get the Docker binary from the official Docker image
FROM docker:latest AS docker-cli

# Stage 2: Use the official Jenkins image
FROM jenkins/jenkins:lts

USER root

# Copy the docker binary from the first stage
COPY --from=docker-cli /usr/local/bin/docker /usr/local/bin/docker

# Ensure it's executable and owned by root
RUN chmod +x /usr/local/bin/docker

# Switch back to the jenkins user
USER jenkins
