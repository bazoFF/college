cd ../../college-client

ng build && xcopy dist\college-client\ ..\build\ /y /s /e /q && xcopy ..\build\ "C:\Projects\OpenServer\domains\college\" /y /s /e /q && cd ../scripts/windows