@echo off
cd web
echo "starting server at http://localhost/"
..\node.exe ..\server.js 8080 no 0
cd ..
pause