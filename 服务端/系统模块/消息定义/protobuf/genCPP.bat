@echo off

rem protoc程序名
set "PROTOC_EXE=protoc.exe"

%PROTOC_EXE% --version

for /r %%i in (./protos/*.proto) do ( 
    echo %%~ni.proto
    %PROTOC_EXE% -I=./protos --cpp_out=../pb  ./protos/%%~ni.proto
)

pause