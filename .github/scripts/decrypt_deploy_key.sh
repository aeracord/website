#!/bin/sh

# Create secrets directory
mkdir $HOME/secrets

# Decrypt file
gpg --quiet --batch --yes --decrypt --passphrase="$DEPLOY_KEY_PASSPHRASE" --output $HOME/secrets/deploy_key deploy_key.gpg

# Set permissions
chmod 600 $HOME/secrets/deploy_key

# Add known host
mkdir $HOME/.ssh
echo "$KNOWN_HOST" >> $HOME/.ssh/known_hosts