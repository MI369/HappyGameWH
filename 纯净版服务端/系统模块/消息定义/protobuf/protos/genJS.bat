@echo off

rem protoc程序名
set "PROTOC_EXE=protoc.exe"

::协议文件路径, 最后不要跟“\”符号
set SOURCE_FOLDER=.

::Js编译器路径
set JS_COMPILER_PATH=..\%PROTOC_EXE%
::JS文件生成路径, 最后不要跟“\”符号
set JS_TARGET_PATH=..\js

::删除之前创建的文件
del %JS_TARGET_PATH%\*.* /f /s /q

%JS_COMPILER_PATH% --version

for /f "delims=" %%i in ('dir /b "%SOURCE_FOLDER%\*.proto"') do (
    echo %%i
	%JS_COMPILER_PATH% --js_out=import_style=commonjs,binary:. %SOURCE_FOLDER%\%%i
)

for /f "delims=" %%i in ('dir /b "%SOURCE_FOLDER%\*.js"') do (
    echo %%i
	move  %SOURCE_FOLDER%\%%i %JS_TARGET_PATH%\%%i
)

pause