// configure the test here
var TestConfig = {
  "TestName": "Medium-bitrate ABX Test",
  "LoopByDefault": true,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "AudioRoot": "",
  "Testsets": [
    //    
        {
            "Name":"Test1",
            "TestID":"1",
            "Files":{
                "A": "audio/16kbps_prop_0_Base.wav",
                "B": "audio/16kbps_prop_0_Prop.wav",
                "X": "audio/16kbps_prop_0_X.wav"
            }
        },
        {
            "Name":"Test2",
            "TestID":"2",
            "Files":{
                "A": "audio/16kbps_prop_1_Prop.wav",
                "B": "audio/16kbps_prop_1_Base.wav",
                "X": "audio/16kbps_prop_1_X.wav"
            }
        },
        {
            "Name":"Test3",
            "TestID":"3",
            "Files":{
                "A": "audio/16kbps_prop_2_Base.wav",
                "B": "audio/16kbps_prop_2_Prop.wav",
                "X": "audio/16kbps_prop_2_X.wav"
            }
        },
        {
            "Name":"Test4",
            "TestID":"4",
            "Files":{
                "A": "audio/16kbps_prop_3_Prop.wav",
                "B": "audio/16kbps_prop_3_Base.wav",
                "X": "audio/16kbps_prop_3_X.wav"
            }
        },
        {
            "Name":"Test5",
            "TestID":"5",
            "Files":{
                "A": "audio/16kbps_prop_4_Base.wav",
                "B": "audio/16kbps_prop_4_Prop.wav",
                "X": "audio/16kbps_prop_4_X.wav"
            }
        },
        {
            "Name":"Test6",
            "TestID":"6",
            "Files":{
                "A": "audio/16kbps_prop_5_Base.wav",
                "B": "audio/16kbps_prop_5_Prop.wav",
                "X": "audio/16kbps_prop_5_X.wav"
            }
        },
        {
            "Name":"Test7",
            "TestID":"7",
            "Files":{
                "A": "audio/16kbps_prop_6_Prop.wav",
                "B": "audio/16kbps_prop_6_Base.wav",
                "X": "audio/16kbps_prop_6_X.wav"
            }
        },
        {
            "Name":"Test8",
            "TestID":"8",
            "Files":{
                "A": "audio/16kbps_prop_7_Base.wav",
                "B": "audio/16kbps_prop_7_Prop.wav",
                "X": "audio/16kbps_prop_7_X.wav"
            }
        },
        {
            "Name":"Test9",
            "TestID":"9",
            "Files":{
                "A": "audio/16kbps_prop_8_Prop.wav",
                "B": "audio/16kbps_prop_8_Base.wav",
                "X": "audio/16kbps_prop_8_X.wav"
            }
        },
        {
            "Name":"Test10",
            "TestID":"10",
            "Files":{
                "A": "audio/16kbps_prop_9_Base.wav",
                "B": "audio/16kbps_prop_9_Prop.wav",
                "X": "audio/16kbps_prop_9_X.wav"
            }
        }

    ]

}
