#!/bin/bash
mv .gitignore .disable-gitignore
pnpm playwright test --workers 32
mv .disable-gitignore .gitignore
