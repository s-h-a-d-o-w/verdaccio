#!/bin/bash
mv .gitignore .disable-gitignore
pnpm playwright test
mv .disable-gitignore .gitignore
