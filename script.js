$(document).ready(function() {
  // LIBRARIES CODE
  LibVars = {};

  function snapClinicalLogicComponent() {
    lib_instance = "4asc4jigsk";
    LibVars.snapclinicallogiccomponent = LibVars.snapclinicallogiccomponent || {};

    function WorkflowLibrary() {
      lib_instance = "b6wh061591";
      LibVars.workflowlibrary = LibVars.workflowlibrary || {};
      LibVars.workflowlibrary.tempListKey = null;
      LibVars.workflowlibrary._urlSetup = null;
      LibVars.workflowlibrary._userName = null;
      LibVars.workflowlibrary._processDefKey = null;
      LibVars.workflowlibrary._initiatorVar = null;
      LibVars.workflowlibrary._processDefId = null;
      LibVars.workflowlibrary._processData = null;
      LibVars.workflowlibrary._processInstId = null;
      LibVars.workflowlibrary._tasks = null;
      LibVars.workflowlibrary._task = null;
      LibVars.workflowlibrary._processVariabes = null;
      LibVars.workflowlibrary._formProperties = null;
      LibVars.workflowlibrary._taskId = null;
      LibVars.workflowlibrary._formKey = null;
      LibVars.workflowlibrary._formName = null;
      LibVars.workflowlibrary._formData = null;
      LibVars.workflowlibrary._formFields = null;
      LibVars.workflowlibrary._outcomes = null;
      LibVars.workflowlibrary._formId = null;
      LibVars.workflowlibrary.tempNum = null;
      LibVars.workflowlibrary._initiator = null;
      LibVars.workflowlibrary._userPassw = null;
      LibVars.workflowlibrary._taskToBeCompleted = null;
      LibVars.workflowlibrary.tempDict = null;
      LibVars.workflowlibrary.tempDict1 = null;
      LibVars.workflowlibrary.tempParam = null;
      LibVars.workflowlibrary._processInstances = null;
      LibVars.workflowlibrary.tempList = null;
      LibVars.workflowlibrary._outcomeAndFieldMapping = null;
      LibVars.workflowlibrary._currentInitiator = null;
      LibVars.workflowlibrary._templateType = null;
      LibVars.workflowlibrary._templateKey = null;
      LibVars.workflowlibrary._processInstance = null;
      LibVars.workflowlibrary.tempN2 = null;
      LibVars.workflowlibrary.tempList1 = null;
      /**
       * Describe this function...
       */
      this.printoutListOfDict = printoutListOfDict;

      function printoutListOfDict(inputListOfObj) {
        return new Promise(function(resolve, reject) {
          // Block#: aLpZNj6,C{nQZ/8N/?+5
          if(!!inputListOfObj.length && com.fc.JavaScriptDistLib.MathLibrary.mathCompare(inputListOfObj.length, "GT", 0)) {
            // Block#: oa!7k8bDPEV(7Yz{Gq2d
            LibVars.workflowlibrary.tempListKey = [];
            // Block#: JNrWv?.{/%v[C^[I+C$`
            LibVars.workflowlibrary.tempListKey = (com.fc.JavaScriptDistLib.Dictionary.getKeys(inputListOfObj[0]));
            // Block#: ]aeoYkEpa;]uy2w`G{*{
            var indexpo1_end = inputListOfObj.length;
            var indexpo1_inc = 1;
            if(1 > indexpo1_end) {
              let indexpo1_inc = -indexpo1_inc;
            }
            for(indexpo1 = 1; indexpo1_inc >= 0 ? indexpo1 <= indexpo1_end : indexpo1 >= indexpo1_end; indexpo1 += indexpo1_inc) {}
          }
        });
      }
      /**
       * Describe this function...
       */
      this.ShowProcessInfo = ShowProcessInfo;

      function ShowProcessInfo() {
        return new Promise(function(resolve, reject) {
        });
      }
      /**
       * Describe this function...
       */
      this.printoutListOfStrings = printoutListOfStrings;

      function printoutListOfStrings(inputListOfObj) {
        return new Promise(function(resolve, reject) {
          // Block#: ?xT;8-,qmT0}VudEmXag
          if(!!inputListOfObj.length && com.fc.JavaScriptDistLib.MathLibrary.mathCompare(inputListOfObj.length, "GT", 0)) {}
        });
      }
      /**
       * Describe this function...
       */
      this.AppendInfo = AppendInfo;

      function AppendInfo(name2, value) {
        return new Promise(function(resolve, reject) {
        });
      }

      function mathRandomInt(a, b) {
        if(a > b) {
          // Swap a and b to ensure a is smaller.
          var c = a;
          a = b;
          b = c;
        }
        return Math.floor(Math.random() * (b - a + 1) + a);
      }
      /**
       * Describe this function...
       */
      this.testInitSDKforgetful = testInitSDKforgetful;

      function testInitSDKforgetful() {
        return new Promise(function(resolve, reject) {
          // Block#: C?[y]QkXNHz}A_BP6!zX
          LibVars.workflowlibrary._initiatorVar = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['initiator', 'userName', 'userPassw', 'processDefKey', 'urlSetup'], [String('sdkTEST') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(mathRandomInt(1000, 30000))), 'forgetfulUser', '4mn3s14C!', 'SDKv11TestFlow', 'https://developnew.snapclinical.net']);
          // Block#: AiP%e2SaJeRe?3)t;VAQ
          LibVars.workflowlibrary._initiator = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'initiator'));
          // Block#: Bn5ViK1:e8/%r}h$f7|s
          LibVars.workflowlibrary._userName = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'userName'));
          // Block#: J9z#8t3+mdYF_P%kQuIA
          LibVars.workflowlibrary._userPassw = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'userPassw'));
          // Block#: Eh^@o)%:ej63I{G%zFGB
          LibVars.workflowlibrary._processDefKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'processDefKey'));
          // Block#: +EEDyY6L{9So^0|bW2Up
          LibVars.workflowlibrary._urlSetup = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'urlSetup'));
        });
      }
      /**
       * Describe this function...
       */
      this.TestInitSDK = TestInitSDK;

      function TestInitSDK() {
        return new Promise(function(resolve, reject) {
          // Block#: rQO{,%cUbTaY=47}Q56g
          LibVars.workflowlibrary._initiatorVar = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['initiator', 'userName', 'userPassw', 'processDefKey', 'urlSetup'], [String('sdkTEST') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(mathRandomInt(1000, 30000))), 'jessica+test@snapiot.com', '1234@Test', 'SDKv11TestFlow', 'https://developnew.snapclinical.net']);
          // Block#: X1X:~yjfb+;@SH`tUzH+
          LibVars.workflowlibrary._initiator = null;
          // Block#: VM9o$anfu2m0n5Y-mzkB
          LibVars.workflowlibrary._userName = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'userName'));
          // Block#: f$2q36h{3_EXvMmy[{h$
          LibVars.workflowlibrary._userPassw = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'userPassw'));
          // Block#: z=mD)62`^v(+5,tTevOJ
          LibVars.workflowlibrary._processDefKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'processDefKey'));
          // Block#: P:@L;%C93,h].q1{Eb69
          LibVars.workflowlibrary._urlSetup = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'urlSetup'));
        });
      }
      /**
       * Describe this function...
       */
      this.startFlow = startFlow;

      function startFlow() {
        return new Promise(function(resolve, reject) {
          // Block#: zTc|qmmU[Gt6iSegQ#l!
          startNewProcessInstance(LibVars.workflowlibrary._processDefKey, true).then(response => {;
            if(response.name === "success") {
              // Block#: J?:2@%=k(-w=!#FR(G$M
              ShowProcessInfo().then(response => {;
              });
            }
            if(response.name === "failure") {
              // Block#: %de7v4oS+C:*cqE:Vnbu
              com.fc.JavaScriptDistLib.Debug.printLog(com.fc.JavaScriptDistLib.TextLib.convertToText(response.data));
              // Block#: i26()7nO]yfWLMni[tzg
              AppendInfo('-- startFlow  ON FAILURE ', (com.fc.JavaScriptDistLib.TextLib.convertToText(response.data))).then(response => {;
              });
            }
          });
        });
      }
      /**
       * To setup the user name and the password to access to the
       * workflow. Start from here to interact with the workflow.
       */
      this.initWorkflowWithCredentials = initWorkflowWithCredentials;

      function initWorkflowWithCredentials(User, Password, initiator) {
        return new Promise(function(resolve, reject) {
          // Block#: zC@!f!v3k}}*b|GXa$-u
          if(!(User == null || Password == null)) {
            // Block#: ]^$Y;X0-}*l_4$nA?jB9
            LibVars.workflowlibrary._userName = User;
            // Block#: Tx:Fiz?m4vg5,~ypEHr;
            LibVars.workflowlibrary._userPassw = Password;
            // Block#: fYiCub|QVm,4;am/r5Ax
            com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://developnew.snapclinical.net","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":true,"frontEndKey":"mobileApp"}}');
            com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure(LibVars.workflowlibrary._userName, LibVars.workflowlibrary._userPassw, LibVars.workflowlibrary._userName, "mobileApp", "https://developnew.snapclinical.net");
            // Block#: r]_8{Ov/L2qxdxQq0.DT
            if(initiator == null) {
              // Block#: u]~/HF,82OZm!?sA;$h]
              LibVars.workflowlibrary._initiator = '';
            } else {
              // Block#: L?Dm~(C;%$KM[cs^wt{C
              LibVars.workflowlibrary._initiator = initiator;
            }
          }
          // Block#: ^s$Sn}g4Wrilbw03t41H
          eraseParsedVars().then(response => {;
          });
          // Block#: Y@S#J}`:]1w3U^FU}d7F
          com.fc.JavaScriptDistLib.Debug.printLog('SDK initWorkflow with credentials called');
        });
      }
      /**
       * To complete the current task and get the next one if it exists.
       * You have to specify the outcome's name (valid outcome of the current task).
       */
      this.completeAndGetNextTask = completeAndGetNextTask;

      function completeAndGetNextTask(outcomeObj) {
        return new Promise(function(resolve, reject) {
          // Block#: 7=KJb9ZpU,se~aM[d,0g
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK completeAndGetNextTask ... adding outcome value .. ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeObj)));
          // Block#: mysWPqPsV*o4%n_)0nH9
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary._taskToBeCompleted, 'outcome')) {
            // Block#: A~!@U:B@{vHpa{R?sQ#{
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'outcome', outcomeObj);
          }
          // Block#: *AL$m8VnvpB+=K%.x9[g
          com.fc.JavaScriptDistLib.Debug.printLog(['SDK calling  complete task and get next with ', ' this list of keys in dictionary task: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._taskToBeCompleted)))].join(''));
          // Block#: ^Vv#,#ip6}#r84@zpsv%
          com.fc.JavaScriptDistLib.SnapClinical.completeTaskAndGetNext(LibVars.workflowlibrary._taskToBeCompleted,
            function(process_data) {
              // Block#: !F:A=9i{n^MTKen4#xJ;
              LibVars.workflowlibrary._processData = process_data;
              // Block#: .}]B1v{@Ij+I6k[?]uut
              parseProcessData(false, null).then(response => {;
              });
              // Block#: !fTLMH]:Zf0c|W{kE/[V
              com.fc.JavaScriptDistLib.Debug.printLog(String('SDK completeAndGetNextTask success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._processData))));
              // Block#: 26NQ/=^-rX@1,8O|CP#/
              resolve({
                name: "success",
                data: process_data
              });
            },
            function(error_data) {
              // Block#: $2Mybx(ARQF?F..vx3Kc
              com.fc.JavaScriptDistLib.Debug.printLog(String('SDK completeAndGetNextTask error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
              // Block#: oDp}wFLVeirCQ#0?:^_m
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.getInitVar = getInitVar;

      function getInitVar() {
        // Block#: gPq~?;_z-~G_(Bcn^=|d
        LibVars.workflowlibrary.tempDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['initiator', 'userName', 'userPassw', 'processDefKey', 'urlSetup'], [LibVars.workflowlibrary._initiator, LibVars.workflowlibrary._userName, LibVars.workflowlibrary._userPassw, LibVars.workflowlibrary._processDefKey, LibVars.workflowlibrary._urlSetup]);
        // Block#: N?w23TNVy09rj$)*e(Y3
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getInitVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary.tempDict))));
        return LibVars.workflowlibrary.tempDict;
      }
      /**
       * To start a new instance of the workflow or to resume the last run of it.
       * You must specify
       * - processDefinitionKey will be your Process Identifier (text)
       * - forceStartNewInstance will be set to true if you want to start
       * a new instance or to false if you need to resume an old one.
       */
      this.startNewProcessWithVars = startNewProcessWithVars;

      function startNewProcessWithVars(processDefKey, forceStartNewInstance, listOfVars) {
        return new Promise(function(resolve, reject) {
          // Block#: l`Yd*l[g8F.wxD10iBmH
          LibVars.workflowlibrary.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['forceStartNewInstance'], [forceStartNewInstance]);
          // Block#: fs7fA;$I_%*D,Q_;ej0e
          if(listOfVars != null) {
            // Block#: x7z{V{^lJy:6v9A:):i~
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(listOfVars, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'type'], ['frontEndKey', 'mobileApp', 'string']))
            // Block#: Gd:QsRFiPFHepLX^;awJ
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict1, 'processVariables', listOfVars);
          }
          // Block#: $;SbM8S3Y=bM..5rEksT
          LibVars.workflowlibrary._processDefKey = processDefKey;
          // Block#: (P${f{/X=Gx8=ZK=F3nT
          com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
              "forceStartNewInstance": false
            }, LibVars.workflowlibrary.tempDict1), {
              "processDefinitionKey": processDefKey
            }),
            function(process_data) {
              // Block#: YpWf.ePiTX),W68/JQ?j
              LibVars.workflowlibrary._processData = process_data;
              // Block#: ^z?^L68XOE@d2!(k.7B8
              parseProcessData(false, null).then(response => {;
              });
              // Block#: TgLhWKzt0^{|!u~bXzy*
              com.fc.JavaScriptDistLib.Debug.printLog(String('SDK startNewProcessInstanceWithVars success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._processData))));
              // Block#: 9cQ,mM6!Y|yAmOz0d:rg
              resolve({
                name: "success",
                data: process_data
              });
            },
            function(error_data) {
              // Block#: ~r=HiT_6_QbNMax2ZFL.
              com.fc.JavaScriptDistLib.Debug.printLog(String('SDK startNewProcessInstanceWithVars error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
              // Block#: ]g3vK,Q.($GQ{;;p2FkF
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * To complete the current task and get the next one if it exists.
       * You have to specify the outcome's name (valid outcome of the current task).
       */
      this.completeAndGetNextTaskById = completeAndGetNextTaskById;

      function completeAndGetNextTaskById(outcomeId) {
        return new Promise(function(resolve, reject) {
          // Block#: Yvtdyc_^[]=}cSnI*~4e
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK completeAndGetNextTaskById ...looking for Id  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeId)));
          // Block#: b#$ien{n?@z|Tuv9=bl8
          if(doesExistOutcome(outcomeId)) {
            // Block#: 5y1H.}mF7iDlhW.Iz_Xd
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'outcome', getOutcome(outcomeId));
          }
          // Block#: qI{slP6*N3L0!OWa8/pz
          com.fc.JavaScriptDistLib.SnapClinical.completeTaskAndGetNext(LibVars.workflowlibrary._taskToBeCompleted,
            function(process_data) {
              // Block#: XdDy=(Gj`rF-EuuI.hEb
              LibVars.workflowlibrary._processData = process_data;
              // Block#: !pxYgrn2JJKS#y%ha5xV
              parseProcessData(false, null).then(response => {;
              });
              // Block#: !s|V2~N*I;QtUp3W*$~?
              com.fc.JavaScriptDistLib.Debug.printLog(String('SDK completeAndGetNextTaskById success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._processData))));
              // Block#: @`ke?Ic1NMo4q~Vs8KRW
              resolve({
                name: "success",
                data: process_data
              });
            },
            function(error_data) {
              // Block#: J=y3t29Dhb#p[*-{K]u#
              com.fc.JavaScriptDistLib.Debug.printLog(String('SDK completeAndGetNextTaskById error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
              // Block#: RN_Tr*,Y:K?.OtKTT$rK
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * To setup the user name and the password to access to the
       * workflow. Start from here to interact with the workflow.
       */
      this.initWorkflow = initWorkflow;

      function initWorkflow() {
        return new Promise(function(resolve, reject) {
          // Block#: hSdJ!zGqd3nW`R(|Sf|b
          eraseParsedVars().then(response => {;
          });
          // Block#: 1,)Pmk4]Lm63aroPtn?T
          com.fc.JavaScriptDistLib.Debug.printLog('SDK initWorkflow without credentials called');
        });
      }
      /**
       * To start a new instance of the workflow or to resume the last run of it.
       * You must specify
       * - processDefinitionKey will be your Process Identifier (text)
       * - forceStartNewInstance will be set to true if you want to start
       * a new instance or to false if you need to resume an old one.
       */
      this.startNewProcessInstance = startNewProcessInstance;

      function startNewProcessInstance(processDefKey, forceStartNewInstance) {
        return new Promise(function(resolve, reject) {
          // Block#: }q/,[;-@$g=WGfa}:bNG
          LibVars.workflowlibrary.tempParam = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['forceStartNewInstance'], [forceStartNewInstance]);
          // Block#: _.a@//oU1{WOm%#o/xf1
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempParam, 'processVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'type'], ['frontEndKey', 'mobileApp', 'string'])]);
          // Block#: zIQs3yCF/NkA(?4/|u-v
          if(LibVars.workflowlibrary._initiator != null) {
            // Block#: ;/m,htUp.hBP{I/Ez~XO
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(LibVars.workflowlibrary._initiator, "EQUAL", '')) {
              // Block#: sPF35ko=|eWU*@pLPx7M
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempParam, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', LibVars.workflowlibrary._initiator, 'equals', 'string'])]);
            }
          }
          // Block#: @]Ba!E=3tn~Oj+Wf+FOr
          LibVars.workflowlibrary._processDefKey = processDefKey;
          // Block#: w?kgPk4G/`abd)qr0~)@
          com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
              "forceStartNewInstance": false
            }, LibVars.workflowlibrary.tempParam), {
              "processDefinitionKey": processDefKey
            }),
            function(process_data) {
              // Block#: 4f$QXZ+E0Aq{G1kdn:BL
              LibVars.workflowlibrary._processData = process_data;
              // Block#: Ffc^U`Q4:KIi:s8TwD)p
              parseProcessData(false, null).then(response => {;
              });
              // Block#: YNvH8H}e45(z6)yl=%zg
              com.fc.JavaScriptDistLib.Debug.printLog(String('SDK startNewProcessInstance success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._processData))));
              // Block#: `XnGAXK_~8#a8^^1Q0pB
              resolve({
                name: "success",
                data: LibVars.workflowlibrary._processData
              });
            },
            function(error_data) {
              // Block#: QxAXGB2r!RBjr?P,.I/w
              com.fc.JavaScriptDistLib.Debug.printLog(String('SDK startNewProcessInstance error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
              // Block#: FWJsGFdBn_II9yj_]B1g
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * To get the current task if it exists.
       */
      this.getActiveProcessInstances = getActiveProcessInstances;

      function getActiveProcessInstances(processDefKey, latestVersion) {
        return new Promise(function(resolve, reject) {
          // Block#: z2@:P7^44=~j)4}58Q-Y
          LibVars.workflowlibrary._processDefKey = processDefKey;
          // Block#: j*]!vGv^qc[AGgp]`PY8
          LibVars.workflowlibrary.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['processDefinitionKey'], [(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary._processDefKey))]);
          // Block#: 4t|Sp9YrZXU$Hx`=Lu};
          if(latestVersion != null) {
            // Block#: 5Z/WWUm#YB_jGZ?aCUMk
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict1, 'latestVersion', latestVersion);
          }
          // Block#: (?q[nPn/3eWB8,eb:c)W
          if(LibVars.workflowlibrary._initiator != null) {
            // Block#: EwO-oR3l$s-)J!ZV]?OJ
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(LibVars.workflowlibrary._initiator, "EQUAL", '')) {
              // Block#: KjohidB/ikkCe{|^PnsL
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict1, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', LibVars.workflowlibrary._initiator, 'equals', 'string'])]);
            }
          }
          // Block#: $J:L#(;s|~*0GI[NeS,n
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getting process Instances with parameters ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary.tempDict1)));
          // Block#: d4nuXQ:5M8V2yVC2y+cp
          com.fc.JavaScriptDistLib.SnapClinical.fetch('/flow-api/snap-api/get-process-instances', "POST", JSON.stringify(LibVars.workflowlibrary.tempDict1),
            function(data) {
              // Block#: ~wZ/RQ.G`)9#C+xdt?lo
              if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(data, 'processInstances')) {
                // Block#: r6o$^E*L7-2jj(nbidL1
                LibVars.workflowlibrary._processInstances = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'processInstances'));
                // Block#: W@/NoI4WJ=cM9gHZ]Z{1
                com.fc.JavaScriptDistLib.Debug.printLog('SDK getActiveProcessInstances success');
                // Block#: ^*^ulNcZnM=2C;BIiBe!
                parseProcessInstances().then(response => {;
                });
                // Block#: y/ur{vaAvbQV?t^(uQqL
                resolve({
                  name: "success",
                  data: data
                });
              } else {
                // Block#: gh%$j0MN=-[jO#@E^*nZ
                com.fc.JavaScriptDistLib.Debug.printLog('SDK getActiveProcessInstances NO processInstances field in dictionary');
                // Block#: FKr.fH,-V)8]rYEgqsS2
                resolve({
                  name: "failure",
                  data: data
                });
              }
            },
            function(error) {
              // Block#: Fy|bVWQgN?k:ln$%r/3`
              com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getActiveProcessInstances failure --  : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error))));
              // Block#: R5:`s`FGH$IfPAZQ_IT_
              resolve({
                name: "failure",
                data: error
              });
            });
        });
      }
      /**
       * To get the current task if it exists.
       */
      this.getActiveTasks = getActiveTasks;

      function getActiveTasks(processDefKey, processInstanceId, taskName) {
        return new Promise(function(resolve, reject) {
          // Block#: ey(cV_wHzhJ9H6qXD]37
          LibVars.workflowlibrary.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: f12dw.TGq}s(s1yD^/lp
          if(processDefKey != null) {
            // Block#: J6Z=cf|3x%@18q=k5[q)
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(processDefKey, "EQUAL", '')) {
              // Block#: HB|OVu=^enpx,j^/]R6s
              LibVars.workflowlibrary._processDefKey = processDefKey;
              // Block#: rL:v7E@!K_U=|k_~WrLT
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict1, 'processDefinitionKey', LibVars.workflowlibrary._processDefKey);
            }
          }
          // Block#: 4!R@`C:h_-#N0Z0Rep2}
          if(processInstanceId != null) {
            // Block#: ?t}~z.*O`5RA;}2sJD;I
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(processInstanceId, "EQUAL", '')) {
              // Block#: oCeYVNOV{Zy{9F$2Gj9~
              LibVars.workflowlibrary._processInstId = processInstanceId;
              // Block#: [vM2Gu]]r2A^|hQ2c$D/
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict1, 'processInstanceId', LibVars.workflowlibrary._processInstId);
            }
          }
          // Block#: /8$vg`tlvr)I/-qrnq)f
          if(LibVars.workflowlibrary._initiator != null) {
            // Block#: bGv$z]%iZx_hy^A(mn]$
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(LibVars.workflowlibrary._initiator, "EQUAL", '')) {
              // Block#: m,a3ucfMrL!k_U,{_EO0
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict1, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', LibVars.workflowlibrary._initiator, 'equals', 'string'])]);
            }
          }
          // Block#: /Ow/jfKcIa%l$Qr_T{C~
          com.fc.JavaScriptDistLib.SnapClinical.getActiveTasks(LibVars.workflowlibrary.tempDict1,
            function(active_tasks) {
              // Block#: Y+XH|qV1|L_]qsg1Qys%
              LibVars.workflowlibrary._processData = active_tasks;
              // Block#: K.t.2K}]vIh6/Mf#l.3b
              parseProcessData(true, taskName).then(response => {;
              });
              // Block#: /HzjPf1m|C+|jS~?f0;T
              com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getActiveTasks success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._processData))));
              // Block#: Yc3-G+0JFUnjl+/[0S4u
              resolve({
                name: "success",
                data: active_tasks
              });
            },
            function(error_data) {
              // Block#: ?is]iK53/8^j+r-H;FuH
              com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getActiveTasks error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
              // Block#: 2Uo.6@:,;O.;_YLzMYC5
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.logout = logout;

      function logout() {
        return new Promise(function(resolve, reject) {
          // Block#: u(:]sWW4V9dP{N4Cu^RO
          com.fc.JavaScriptDistLib.SnapClinical.logout(
            function(success_data) {
              // Block#: Ok%CB-Pd]q`:=/s8+J~K
              LibVars.workflowlibrary._userName = 'forgetfulUser';
              // Block#: k]Y|kiMp/QXlyIFv2`Tk
              LibVars.workflowlibrary._userPassw = '4mn3s14C!';
              // Block#: #WB`ciB-+DICSB@d}Uc;
              com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://developnew.snapclinical.net","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":true,"frontEndKey":"mobileApp"}}');
              com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure(LibVars.workflowlibrary._userName, LibVars.workflowlibrary._userPassw, LibVars.workflowlibrary._userName, "mobileApp", "https://developnew.snapclinical.net");
              // Block#: 8H)qgG~54Cre=yoJ3iiJ
              initWorkflowWithCredentials(null, null, null).then(response => {;
              });
              // Block#: bUgGqtb.bf$Ht^Y-%QR3
              com.fc.JavaScriptDistLib.Debug.printLog('SDK logout success');
              // Block#: ]{kwGk%MfjXgc]IVsPa?
              resolve({
                name: "then",
                data: 'SDK logout success'
              });
            },
            function(error_data) {
              // Block#: j/x[.Z^.A%$APcwqf-6x
              com.fc.JavaScriptDistLib.Debug.printLog(String('SDK logout error:') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
              // Block#: c?I`L,=.hrOd?}[1-Ou/
              resolve({
                name: "catch",
                data: (String('SDK logout error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))))
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.getProcessData = getProcessData;

      function getProcessData() {
        // Block#: cJWzC?e4K2.s.bS5T3z+
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getProcessData list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._processData))));
        return LibVars.workflowlibrary._processData;
      }
      /**
       * Describe this function...
       */
      this.setProcessVariable = setProcessVariable;

      function setProcessVariable(name2, value, type) {
        return new Promise(function(resolve, reject) {
          // Block#: fl``|]bZhX,hsd+4=UBz
          com.fc.JavaScriptDistLib.Debug.printLog(['SDK setProcessVariable num of vars: ', safeLength(LibVars.workflowlibrary._processVariabes), '  adding / setting var: ', name2].join(''));
          // Block#: /#+h`aY2tR8.(S4nB`Jc
          if(doesExistCurrentTask()) {
            // Block#: z-p:pd.s)zS|{{7^r{[c
            if(doesContainProcessVariableName(name2)) {
              // Block#: }rNCd{le_?[aGymKA/FM
              LibVars.workflowlibrary.tempNum = 0;
              // Block#: Re(v%NPcP]DK#yyeoy!w
              var item_list = LibVars.workflowlibrary._processVariabes;
              for(var item_index in item_list) {
                let item = item_list[item_index];
                // Block#: ^!7$,e6QAx)K!Ixl.0mT
                if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", name2)) {
                  // Block#: *S+*GL/c@On+rlqx,}55
                  LibVars.workflowlibrary.tempDict = item;
                  // Block#: J5@4/Gl5WsPEv-DhwD7/
                  com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict, 'value', value);
                  // Block#: R.N)idyNnfb7(I+skE3s
                  LibVars.workflowlibrary._processVariabes[LibVars.workflowlibrary.tempNum] = LibVars.workflowlibrary.tempDict;
                }
                // Block#: 7/Us9:R!s_F~=37{d^Q?
                LibVars.workflowlibrary.tempNum = LibVars.workflowlibrary.tempNum + 1;
              }
            } else {
              // Block#: K8{b.]4*)fBtMo7}Ds[G
              LibVars.workflowlibrary.tempDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'type', 'value'], [name2, type, value]);
              // Block#: wFb8gv7liSAXvA_Jgk.A
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.workflowlibrary._processVariabes, LibVars.workflowlibrary.tempDict)
            }
            // Block#: )}(N9doX5kiVPt#_uk5@
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._task, 'processVariables', LibVars.workflowlibrary._processVariabes);
            // Block#: D-i;X3`Uwn^AClSlvd:5
            LibVars.workflowlibrary._tasks[0] = LibVars.workflowlibrary._task;
            // Block#: +a61$mWaDwwZKQTEgH~Y
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._processData, 'tasks', LibVars.workflowlibrary._tasks);
            // Block#: fPHS4XlNp%eN-:,XOjB,
            com.fc.JavaScriptDistLib.Debug.printLog(String('SDK setProcessVariable num of vars now is: ') + String(safeLength(LibVars.workflowlibrary._processVariabes)));
            // Block#: KlEG$rEaQ~Rk}950-A8S
            LibVars.workflowlibrary.tempNum = getIndexOfVarInTaskToBeCompleted(name2);
            // Block#: ]SDFJ:[~R3NMXK*$@h~i
            LibVars.workflowlibrary.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'processVariables'));
            // Block#: I+_=:xhSHjH!OU$iVp(-
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.workflowlibrary.tempNum, "EQ", -1)) {
              // Block#: vN3ZQdo#dvO^)W0M/v`Z
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.workflowlibrary.tempList, LibVars.workflowlibrary.tempDict)
            } else {
              // Block#: `g*^=/2Ty+Z434}h4Wjv
              LibVars.workflowlibrary.tempList[LibVars.workflowlibrary.tempNum] = LibVars.workflowlibrary.tempDict;
            }
            // Block#: @uV`SeGSX@u!S/V=^_:y
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'processVariables', LibVars.workflowlibrary.tempList);
            // Block#: {,PP60KJ^8T[^~BYqau~
            com.fc.JavaScriptDistLib.Debug.printLog(String('SDK setProcessVariable new val for var added to task to be completed lenght is: ') + String(safeLength(LibVars.workflowlibrary.tempList)));
          } else {
            // Block#: 31gi0ioB4Lvw}%V_e2v[
            com.fc.JavaScriptDistLib.Debug.printLog('SDK no current Task ... nothing to do');
          }
        });
      }
      /**
       * To check if another task is available (true)
       * or the current flow is at the end (false).
       */
      this.doesExistCurrentTask = doesExistCurrentTask;

      function doesExistCurrentTask() {
        // Block#: =8(Ef*9BC62$E7_l3P#d
        com.fc.JavaScriptDistLib.Debug.printLog('SDK doesExixtCurrentTask called');
        // Block#: _yNMsE4};MK%xzk^NnAp
        if(LibVars.workflowlibrary._task == null) {
          return false;
        }
        // Block#: Dx14Nbp7RJ%;nhUmlA%g
        if((com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._task)) == null) {
          return false;
        }
        return !!(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._task)).length;
      }
      /**
       * Describe this function...
       */
      this.getCurrentTask = getCurrentTask;

      function getCurrentTask() {
        // Block#: A//H39vF:Nwf4)0Ptt)[
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getCurrentTask list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._task))));
        return LibVars.workflowlibrary._task;
      }
      /**
       * Describe this function...
       */
      this.getProcessVariables = getProcessVariables;

      function getProcessVariables() {
        // Block#: E`snYA58/d#sQh_a17C[
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getProcessVariables number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(LibVars.workflowlibrary._processVariabes))));
        return LibVars.workflowlibrary._processVariabes;
      }
      /**
       * Describe this function...
       */
      this.getFormProperties = getFormProperties;

      function getFormProperties() {
        // Block#: Q9K_jdXSe}PAge/y=Im@
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getFormProperties number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(LibVars.workflowlibrary._formProperties))));
        return LibVars.workflowlibrary._formProperties;
      }
      /**
       * Describe this function...
       */
      this.doesContainProcessVariableName = doesContainProcessVariableName;

      function doesContainProcessVariableName(target) {
        // Block#: V|qJmmTDcBN/R;.~0*!x
        if(target == null || com.fc.JavaScriptDistLib.TextLib.textComparison(target, "EQUAL", '')) {
          return false;
        }
        // Block#: ryPt/oi=;{`_=;[IsFSs
        var item_list2 = LibVars.workflowlibrary._processVariabes;
        for(var item_index2 in item_list2) {
          let item = item_list2[item_index2];
          // Block#: /~(YAz$I4GpUepu5HhmT
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", target)) {
            return true;
          }
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.getOutcomeAndFieldMappingNames = getOutcomeAndFieldMappingNames;

      function getOutcomeAndFieldMappingNames() {
        // Block#: }]hO!V5itfl+*{@e+3t;
        LibVars.workflowlibrary.tempList = [];
        // Block#: =E!_C0Emn$i=4w5BY1U{
        var item_list3 = LibVars.workflowlibrary._outcomeAndFieldMapping;
        for(var item_index3 in item_list3) {
          let item = item_list3[item_index3];
          // Block#: (`rebY,UT0Yp!34(.Ddb
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.workflowlibrary.tempList, (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'))))
        }
        // Block#: URUoW(x4w51U!V.Ij+ls
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getOutcomeAndFieldMappingNames  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(LibVars.workflowlibrary.tempList))));
        return LibVars.workflowlibrary.tempList;
      }
      /**
       * Describe this function...
       */
      this.getOutcomeAndFieldMapping = getOutcomeAndFieldMapping;

      function getOutcomeAndFieldMapping() {
        // Block#: HYJJO3YM}m5PH)dot_;L
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getOutcomeAndFieldMapping  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(LibVars.workflowlibrary._outcomeAndFieldMapping))));
        return LibVars.workflowlibrary._outcomeAndFieldMapping;
      }
      /**
       * Describe this function...
       */
      this.getFormProperty = getFormProperty;

      function getFormProperty(id) {
        // Block#: P==W8qd^sLKt/U/T!A`O
        LibVars.workflowlibrary.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: NjA`f7iC6R|Nvuuh_zHT
        if(id == null) {
          return LibVars.workflowlibrary.tempDict;
        }
        // Block#: ZN%M9~+IRToLl{9Tvj;W
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return LibVars.workflowlibrary.tempDict;
        }
        // Block#: 7i.OVNCzsfdlV2q4u7%G
        if(LibVars.workflowlibrary._formProperties != null) {
          // Block#: lzsZLHdLML%ib`^$UT~b
          var item_list4 = LibVars.workflowlibrary._formProperties;
          for(var item_index4 in item_list4) {
            let item = item_list4[item_index4];
            // Block#: /x7cK`HZ;{.hb0lNE]Uo
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
              // Block#: nj@:3IQ:)z(t:K9Ob{T@
              LibVars.workflowlibrary.tempDict = item;
            }
          }
        }
        // Block#: K8AE]-RKuIY5h7=!{^BM
        com.fc.JavaScriptDistLib.Debug.printLog(['SDK getFormProperty with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, 'value')))].join(''));
        return LibVars.workflowlibrary.tempDict;
      }
      /**
       * Describe this function...
       */
      this.getProcessVariable = getProcessVariable;

      function getProcessVariable(name2) {
        // Block#: ;#jDl#n`yf:1,8;:lnAR
        LibVars.workflowlibrary.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: XltA0Qsjuc@qZk+g@D:~
        if(name2 == null) {
          return LibVars.workflowlibrary.tempDict;
        }
        // Block#: @(^uxre=m-ru5AROPHfj
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(name2, "EQUAL", '')) {
          return LibVars.workflowlibrary.tempDict;
        }
        // Block#: 8@s)~hjziI?1(]`FB_FY
        if(LibVars.workflowlibrary._processVariabes != null) {
          // Block#: .t6K,XR}:7`WLDV*s|bh
          var item_list5 = LibVars.workflowlibrary._processVariabes;
          for(var item_index5 in item_list5) {
            let item = item_list5[item_index5];
            // Block#: M[|u!ld}E3HE4Gq?d?Cb
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", name2)) {
              // Block#: l}su24J5MF;*~WC.!bw!
              LibVars.workflowlibrary.tempDict = item;
            }
          }
        }
        // Block#: XwO+q]~ZbFl5q];Gp1h{
        com.fc.JavaScriptDistLib.Debug.printLog(['SDK getProcessVariable with name (', name2, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary.tempDict)))].join(''));
        return LibVars.workflowlibrary.tempDict;
      }
      /**
       * Describe this function...
       */
      this.getCurrentInitiator = getCurrentInitiator;

      function getCurrentInitiator() {
        // Block#: $9@jRx_-Dx:f$AAw6RA$
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getCurrentInitiator: ') + String(LibVars.workflowlibrary._currentInitiator));
        return LibVars.workflowlibrary._currentInitiator;
      }
      /**
       * Describe this function...
       */
      this.findTask = findTask;

      function findTask(taskName) {
        // Block#: WTC6-HfO,mUMX(#YO3~2
        if(taskName == null) {
          return 0;
        }
        // Block#: wsgIeYDT,l}jybt9a`;a
        var index_end = LibVars.workflowlibrary._tasks.length - 1;
        var index_inc = 1;
        if(0 > index_end) {
          let index_inc = -index_inc;
        }
        for(index = 0; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
          // Block#: 6_Q{yudk/vZ52}y]C],a
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._tasks[index], 'name'), "EQUAL", taskName)) {
            return index;
          }
        }
        return -1;
      }
      /**
       * Describe this function...
       */
      this.getProcessVariableValue = getProcessVariableValue;

      function getProcessVariableValue(name2) {
        // Block#: $A+E]85X)9yix.DB)Pe)
        LibVars.workflowlibrary.tempDict1 = getProcessVariable(name2);
        // Block#: S{VIIeX4HqAy{5dPron=
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary.tempDict1, 'value')) {
          return null;
        }
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict1, 'value');
      }
      /**
       * Describe this function...
       */
      this.getFormPropertyAttribute = getFormPropertyAttribute;

      function getFormPropertyAttribute(id, attribute) {
        // Block#: $Qypr}D:dDnS34}Rv^qh
        LibVars.workflowlibrary.tempDict = getFormProperty(id);
        // Block#: PWK?Ib/jr67@[`=+[bgs
        if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary.tempDict, attribute))) {
          return null;
        }
        // Block#: Q^9U[?RhR^]#/6M@7BHx
        com.fc.JavaScriptDistLib.Debug.printLog(['SDK getFormPropertyAttribute with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary.tempDict))), ' .. value of attribute ', attribute, ' value ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, attribute)))].join(''));
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, attribute);
      }
      /**
       * Describe this function...
       */
      this.getFormPropertyName = getFormPropertyName;

      function getFormPropertyName(id) {
        // Block#: J*-rAsH1kZb=7ib9-N-t
        LibVars.workflowlibrary.tempParam = getFormPropertyAttribute(id, 'name');
        // Block#: -o{Mn9!*Tgzb4jE5Ifi5
        com.fc.JavaScriptDistLib.Debug.printLog(['SDK getFormPropertyName with id (', id, ') ', ' .. name = ', LibVars.workflowlibrary.tempParam].join(''));
        return LibVars.workflowlibrary.tempParam;
      }
      /**
       * To retrieve the template type you have associated
       * to the current task. This is a specific value set
       * in the form properties section as TemplateType.
       */
      this.getTemplateType = getTemplateType;

      function getTemplateType() {
        // Block#: i[TClUtvG0?cy,~h2[3n
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getTemplateType: ') + String(LibVars.workflowlibrary._templateType));
        return LibVars.workflowlibrary._templateType;
      }
      /**
       * Describe this function...
       */
      this.getFormPropertyValue = getFormPropertyValue;

      function getFormPropertyValue(id) {
        // Block#: DH;d_..2@hQzhZWl3Qay
        LibVars.workflowlibrary.tempParam = getFormPropertyAttribute(id, 'value');
        // Block#: P%{C|4nOh(7dS)67dHv(
        com.fc.JavaScriptDistLib.Debug.printLog(['SDK getFormPropertyValue with id (', id, ') ', ' .. value = ', LibVars.workflowlibrary.tempParam].join(''));
        return LibVars.workflowlibrary.tempParam;
      }
      /**
       * Describe this function...
       */
      this.getProcessInstanceId = getProcessInstanceId;

      function getProcessInstanceId() {
        // Block#: q=)Sb$0J9f2h/7C~Wi}#
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getProcessInstanceId value is: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary._processInstId)));
        return LibVars.workflowlibrary._processInstId;
      }
      /**
       * Describe this function...
       */
      this.getForm = getForm;

      function getForm() {
        // Block#: hi_6#X@QWmYo``}%E6ns
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getForm - List of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._formData))));
        return LibVars.workflowlibrary._formData;
      }
      /**
       * To retrieve all the outcomes coming from the current form.
       */
      this.getOutcomes = getOutcomes;

      function getOutcomes() {
        // Block#: sy(^MV.6A9]*3VwE5d=[
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getFormOutcomes  number of items: ') + String(safeLength(LibVars.workflowlibrary._outcomes)));
        return LibVars.workflowlibrary._outcomes;
      }
      /**
       * To set the value of a specific field (addressed by its id) in the current form.
       */
      this.setField = setField;

      function setField(id, value) {
        return new Promise(function(resolve, reject) {
          // Block#: TzKGO;g_YjLqhS#0X?XE
          LibVars.workflowlibrary.tempNum = 0;
          // Block#: Gmr6DFY_$]$Onm?wH=K8
          while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.workflowlibrary.tempNum, "LT", LibVars.workflowlibrary._formFields.length)) {
            // Block#: ya6:gp/0UhHZ^jZ,n{ws
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._formFields[LibVars.workflowlibrary.tempNum], 'id'), "EQUAL", id)) {
              // Block#: BbpN{WQk!0#mQr.=Y1L;
              LibVars.workflowlibrary.tempDict = LibVars.workflowlibrary._formFields[LibVars.workflowlibrary.tempNum];
              // Block#: ;,+{i7(;#tUIDzDdf{KF
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict, 'value', value);
              // Block#: lUqh=7+A/C(IshM=g9Rk
              LibVars.workflowlibrary._formFields[LibVars.workflowlibrary.tempNum] = LibVars.workflowlibrary.tempDict;
              // Block#: MAcVF+F1OQH~RUf4yV(d
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._formData, 'fields', LibVars.workflowlibrary._formFields);
              // Block#: XU[?$x9Vd_{6#8=^H.?5
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._task, 'formData', LibVars.workflowlibrary._formData);
              // Block#: o6A9$vEvQ$CX`hZNDqc,
              LibVars.workflowlibrary._tasks[0] = LibVars.workflowlibrary._task;
              // Block#: 6IEe*mXQ+Hb:/3;b%:n~
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._processData, 'tasks', LibVars.workflowlibrary._tasks);
              // Block#: $GFA%qdt(C`srr69+Q1@
              com.fc.JavaScriptDistLib.Debug.printLog(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  at index ', LibVars.workflowlibrary.tempNum].join(''));
              // Block#: uR5[y9z{]{l:~;r1?V9c
              LibVars.workflowlibrary.tempNum = getIndexOfFieldInTaskToBeCompleted(id);
              // Block#: _E;9Ai[d5z:$/`.c%=~I
              LibVars.workflowlibrary.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'formData'), 'fields'));
              // Block#: xML5Wx(Qp/zE(45t7ol!
              if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.workflowlibrary.tempNum, "EQ", -1)) {
                // Block#: UI[pML9Gr$GM?Q/B9gg8
                com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.workflowlibrary.tempList, LibVars.workflowlibrary.tempDict)
                // Block#: of_9V_*h-7[70WY{BH#1
                com.fc.JavaScriptDistLib.Debug.printLog(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  added in task to be completed'].join(''));
              } else {
                // Block#: jYu#z)/4=AT3N1OT.QDA
                LibVars.workflowlibrary.tempList[LibVars.workflowlibrary.tempNum] = LibVars.workflowlibrary.tempDict;
                // Block#: v0v6MPF7=oRnhD2iJyJj
                com.fc.JavaScriptDistLib.Debug.printLog(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  in task to be completed  at index ', LibVars.workflowlibrary.tempNum].join(''));
              }
              // Block#: v#u]|-I^I$=I%Ra[/shq
              LibVars.workflowlibrary.tempDict1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'formData'));
              // Block#: )fj(zVkdRK;R9vGUb5`u
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict1, 'fields', LibVars.workflowlibrary.tempList);
              // Block#: 4!+*uIn7R;Tlg62eD_}_
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'formData', LibVars.workflowlibrary.tempDict1);
              // Block#: :u:dF[+1Igp{Y96s#Af1
              LibVars.workflowlibrary.tempNum = LibVars.workflowlibrary._formFields.length;
            }
            // Block#: J*42yn66r4)vZ1]G,:{R
            LibVars.workflowlibrary.tempNum = LibVars.workflowlibrary.tempNum + 1;
          }
        });
      }
      /**
       * To retrieve all data coming from a specific field
       * (addressed by its UIObjRef) in the current form.
       */
      this.findFieldByRef = findFieldByRef;

      function findFieldByRef(UIObjRef) {
        // Block#: E`%o_%L1dGWeMJRKQrxZ
        LibVars.workflowlibrary.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: AmMLWFRjWTe2^Zsu;kDQ
        if(UIObjRef == null) {
          return LibVars.workflowlibrary.tempDict;
        }
        // Block#: A|bEyO8:0#l8IBVOquC+
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(UIObjRef, "EQUAL", '')) {
          return LibVars.workflowlibrary.tempDict;
        }
        // Block#: 0-fD_8Yu$rxjLln(~]Z.
        var item_list6 = LibVars.workflowlibrary._formFields;
        for(var item_index6 in item_list6) {
          let item = item_list6[item_index6];
          // Block#: }:t(bf}yQx-BclxW}L/T
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(item, 'params')) {
            // Block#: !?53|IPkE6/t6r+R#ADI
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'params'), 'uiobjref')) {
              // Block#: U0Zp:/!GtSl{nv+A!ed%
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'params'), 'uiobjref'), "EQUAL", UIObjRef)) {
                // Block#: jO4#NAf@zsC)3Q48by)U
                LibVars.workflowlibrary.tempDict = item;
              }
            }
          }
        }
        // Block#: Avn^RG~mVyG$vg%D6oud
        com.fc.JavaScriptDistLib.Debug.printLog(['findFieldByRef: ', UIObjRef, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, 'name'))].join(''));
        return LibVars.workflowlibrary.tempDict;
      }
      /**
       * Describe this function...
       */
      this.getFormKey = getFormKey;

      function getFormKey() {
        // Block#: UF+`UV=b`,zevWhv#k+]
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getFormKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary._formKey)));
        return LibVars.workflowlibrary._formKey;
      }
      /**
       * Describe this function...
       */
      this.getTemplateKey = getTemplateKey;

      function getTemplateKey() {
        // Block#: +I(?+Ahsb|IJ:@-Qd^qq
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getTemplateKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary._templateKey)));
        return LibVars.workflowlibrary._templateKey;
      }
      /**
       * To retrieve all data coming from all the fields in the current form.
       */
      this.getFields = getFields;

      function getFields() {
        // Block#: 2AE2h7pC5GiDeqp.l2RD
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getFields  number of items: ') + String(safeLength(LibVars.workflowlibrary._formFields)));
        return LibVars.workflowlibrary._formFields;
      }
      /**
       * Describe this function...
       */
      this.getRadioButtons = getRadioButtons;

      function getRadioButtons(id) {
        // Block#: kL~]$:SJ`oHep_=_meyI
        LibVars.workflowlibrary.tempList = [];
        // Block#: O5*Z-q4DqKqp:D5TDq8|
        if(id != null && !com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          // Block#: ?lZ`A_qD[jdQ2wwoB5)z
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'type'), "EQUAL", 'radio-buttons') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'fieldType'), "EQUAL", 'OptionFormField')
          ) {
            // Block#: `7;|(C`F]~KCQv~l|D9k
            LibVars.workflowlibrary.tempList = getFieldAttribute(id, 'options');
          }
        }
        // Block#: pl9Eqx:ncTQfLCrr~aD2
        com.fc.JavaScriptDistLib.Debug.printLog(['SDK getRadioButtons id (', id, ') ', ' .. length of  list = ', safeLength(LibVars.workflowlibrary.tempList)].join(''));
        return LibVars.workflowlibrary.tempList;
      }
      /**
       * Describe this function...
       */
      this.getFormName = getFormName;

      function getFormName() {
        // Block#: aKTnD6jr`A{q{YTZwO7Z
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getFormName : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary._formName)));
        return LibVars.workflowlibrary._formName;
      }
      /**
       * To retrieve all data coming from a specific
       * field (addressed by its id) in the current form.
       */
      this.getField = getField;

      function getField(id) {
        // Block#: xL!qrflVW3U]^6E[Ka7X
        LibVars.workflowlibrary.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: )sJIHe}gUXt?_9iK+^0?
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return LibVars.workflowlibrary.tempDict;
        }
        // Block#: XgNIt?jJ6?T9CsWs3/:U
        var item_list7 = LibVars.workflowlibrary._formFields;
        for(var item_index7 in item_list7) {
          let item = item_list7[item_index7];
          // Block#: !`bO*xQV7m:mj+Q|}a*}
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
            // Block#: %]a_L$pkI|-oIgp;d_^~
            LibVars.workflowlibrary.tempDict = item;
          }
        }
        // Block#: {qd=G*Ep}cbKLFgQA)m?
        com.fc.JavaScriptDistLib.Debug.printLog(['SDK getField by id: ', id, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, 'name'))].join(''));
        return LibVars.workflowlibrary.tempDict;
      }
      /**
       * Describe this function...
       */
      this.getFieldAttribute = getFieldAttribute;

      function getFieldAttribute(id, attribute) {
        // Block#: AE8/N]U,,8buovGLSUT^
        LibVars.workflowlibrary.tempDict = getField(id);
        // Block#: .Fqp|67m^Ay!]7@~[6)L
        if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary.tempDict, attribute))) {
          return null;
        }
        // Block#: AMknf3K|MoXZ{H:1R/_Z
        com.fc.JavaScriptDistLib.Debug.printLog(['SDK getFieldAttribute id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, attribute)))].join(''));
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, attribute);
      }
      /**
       * Describe this function...
       */
      this.getCheckBoxFields = getCheckBoxFields;

      function getCheckBoxFields() {
        // Block#: KgYQHyA[{0h%=dh`_w=w
        LibVars.workflowlibrary.tempList = [];
        // Block#: x=6]f[D:]WW2.Ae_b(LN
        var item_list8 = LibVars.workflowlibrary._formFields;
        for(var item_index8 in item_list8) {
          let item = item_list8[item_index8];
          // Block#: !VHezD%rcRIQgXbY6I#-
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'boolean') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'FormField')
          ) {
            // Block#: W.R+J~2c.47gbb7g=0Kr
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.workflowlibrary.tempList, item)
          }
        }
        // Block#: H2)WXl^eh~i-@e^Sdj_m
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getCheckBoxFields   lenght of list is ') + String(safeLength(LibVars.workflowlibrary.tempList)));
        return LibVars.workflowlibrary.tempList;
      }
      /**
       * To set the value of a specific field (addressed
       * by its UIObjRef) in the current form.
       */
      this.setFieldByRef = setFieldByRef;

      function setFieldByRef(UIObjRef, value) {
        return new Promise(function(resolve, reject) {
          // Block#: PkA[wrI4fzxst0S;MTh/
          setField((com.fc.JavaScriptDistLib.Dictionary.getDictValue(findFieldByRef(UIObjRef), 'id')), (com.fc.JavaScriptDistLib.TextLib.convertToText(value))).then(response => {;
          });
          // Block#: zrA8?}+!5{(%@ttT3R:R
          com.fc.JavaScriptDistLib.Debug.printLog(['setFieldByRef: ', UIObjRef, '  value: ', value].join(''));
        });
      }
      /**
       * To retrieve the name of a specific field
       * (addressed by its UIObjRef) in the current form.
       */
      this.findFieldNameByRef = findFieldNameByRef;

      function findFieldNameByRef(UIObjRef) {
        // Block#: 82f25)8;O:)08a%$#cU_
        LibVars.workflowlibrary.tempDict = findFieldByRef(UIObjRef);
        // Block#: dZ6]%)-~$L%6{Mk55nI3
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary.tempDict, 'name')) {
          // Block#: XFP`bPN%G@!O_uD.FJ$A
          LibVars.workflowlibrary.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, 'name'));
        } else {
          // Block#: vu%vGt,6Uk:8L8PK=zm!
          LibVars.workflowlibrary.tempParam = '';
        }
        // Block#: c~^fO3=s}Uv?m-iM}1%a
        com.fc.JavaScriptDistLib.Debug.printLog(['findFieldNameByRef: ', UIObjRef, ' name: ', LibVars.workflowlibrary.tempParam].join(''));
        return LibVars.workflowlibrary.tempParam;
      }
      /**
       * Describe this function...
       */
      this.getDropDown = getDropDown;

      function getDropDown(id) {
        // Block#: xpHGkF|gd$#}]6DXju!`
        LibVars.workflowlibrary.tempList = [];
        // Block#: k{zx,_t0ebEM0Van4H6Z
        if(id != null && !com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          // Block#: gfCE?yFUub11fN8:|xka
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'type'), "EQUAL", 'dropdown') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'fieldType'), "EQUAL", 'OptionFormField')
          ) {
            // Block#: r:H~(ApVAgsg%=0IG@/]
            LibVars.workflowlibrary.tempList = getFieldAttribute(id, 'options');
          }
        }
        // Block#: vF*EB]#~pvJ}^{~QI{v7
        com.fc.JavaScriptDistLib.Debug.printLog(['SDK getDropDown id (', id, ') ', ' .. length of  list = ', safeLength(LibVars.workflowlibrary.tempList)].join(''));
        return LibVars.workflowlibrary.tempList;
      }
      /**
       * Describe this function...
       */
      this.getFieldLabel = getFieldLabel;

      function getFieldLabel(id) {
        // Block#: p|}E|`~~yY28XRG_.w6w
        LibVars.workflowlibrary.tempParam = getFieldAttribute(id, 'name');
        // Block#: Tn]~AZrqwG*RLVYIvt%b
        com.fc.JavaScriptDistLib.Debug.printLog(['SDK getFieldName id (', id, ') ', ' .. value = ', LibVars.workflowlibrary.tempParam].join(''));
        return LibVars.workflowlibrary.tempParam;
      }
      /**
       * Describe this function...
       */
      this.getFieldValue = getFieldValue;

      function getFieldValue(id) {
        // Block#: s6FqVVq=NZ#ucQQU3:zG
        LibVars.workflowlibrary.tempParam = getFieldAttribute(id, 'value');
        // Block#: $6dm%.yz`%+?YAu@Tl]~
        com.fc.JavaScriptDistLib.Debug.printLog(['SDK getFieldValue id (', id, ') ', ' .. value = ', LibVars.workflowlibrary.tempParam].join(''));
        return LibVars.workflowlibrary.tempParam;
      }
      /**
       * Describe this function...
       */
      this.setCheckBoxFields = setCheckBoxFields;

      function setCheckBoxFields(checkBoxValues) {
        return new Promise(function(resolve, reject) {
          // Block#: _XrnXkK56IqcC5i6s/4L
          LibVars.workflowlibrary.tempList = checkBoxValues;
          // Block#: ~/0+F:mGWg/`jvO#WdDp
          var item_list9 = LibVars.workflowlibrary.tempList;
          for(var item_index9 in item_list9) {
            let item = item_list9[item_index9];
            // Block#: ]-AtzMIeHm7qiJ7+f;D{
            setField((com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id')), (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'value'))).then(response => {;
            });
          }
          // Block#: KqQYWVs-xp8oPJJ2DD+/
          com.fc.JavaScriptDistLib.Debug.printLog(['SDK setCheckBoxFields   set the value of ', safeLength(LibVars.workflowlibrary.tempList), 'item/items'].join(''));
        });
      }
      /**
       * To retrieve the value of a specific field
       * (addressed by its UIObjRef) in the current form
       */
      this.findFieldValueByRef = findFieldValueByRef;

      function findFieldValueByRef(UIObjRef) {
        // Block#: -pa`9ks9V+mL|=~ak=fe
        LibVars.workflowlibrary.tempParam = findFieldByRef(UIObjRef);
        // Block#: ;WKPLteeJU.q2Aljj_Dy
        if(!(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary.tempParam)).length) {
          return '';
        }
        // Block#: VZl5#iC7FW`s7g:hqcj(
        LibVars.workflowlibrary.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempParam, 'value'));
        // Block#: cg,DLy$PagPQ6zV#fP1$
        com.fc.JavaScriptDistLib.Debug.printLog(['findFieldValueByRef: ', UIObjRef, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary.tempParam))].join(''));
        return LibVars.workflowlibrary.tempParam;
      }
      /**
       * Describe this function...
       */
      this.getOutcomeName = getOutcomeName;

      function getOutcomeName(id) {
        // Block#: ^ymSIrW:$f28p@6[SI@U
        LibVars.workflowlibrary.tempParam = '';
        // Block#: ~{)~$)O/yh)O{Y%5CQ#X
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return '';
        }
        // Block#: 4lvrEM]*#hq^O2]:Qm=:
        var item_list10 = LibVars.workflowlibrary._outcomes;
        for(var item_index10 in item_list10) {
          let item = item_list10[item_index10];
          // Block#: TEa|F|P8n,!X.Ll;G_}3
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
            // Block#: 76Faw_b`B(+D/HE5v^H4
            LibVars.workflowlibrary.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'));
          }
        }
        // Block#: 37=4oHW1KOquM92@|%S/
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getOutcomeName by id : ') + String(LibVars.workflowlibrary.tempParam));
        return LibVars.workflowlibrary.tempParam;
      }
      /**
       * Describe this function...
       */
      this.doesExistOutcome = doesExistOutcome;

      function doesExistOutcome(id) {
        // Block#: Hmb|}(N-?u9Vam.DojFf
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return false;
        }
        // Block#: WAad5%@cF]|J0Nu-+d=c
        var item_list11 = LibVars.workflowlibrary._outcomes;
        for(var item_index11 in item_list11) {
          let item = item_list11[item_index11];
          // Block#: LGQ-c:Ry^kl]E9.SdcSR
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
            return true;
          }
        }
        return false;
      }
      /**
       * To retrieve the id of a specific field
       * (addressed by its UIObjRef) in the current form
       */
      this.findFieldIDByRef = findFieldIDByRef;

      function findFieldIDByRef(UIObjRef) {
        // Block#: ~g_kuTs~[S)9RPjA6vB5
        LibVars.workflowlibrary.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(findFieldByRef(UIObjRef), 'id'));
        // Block#: CKAAyvw./=$iA+pq.L9n
        com.fc.JavaScriptDistLib.Debug.printLog(['findFieldIdByRef: ', UIObjRef, ' ID: ', LibVars.workflowlibrary.tempParam].join(''));
        return LibVars.workflowlibrary.tempParam;
      }
      /**
       * Describe this function...
       */
      this.getIdofFirstRadioButtonField = getIdofFirstRadioButtonField;

      function getIdofFirstRadioButtonField() {
        // Block#: c;r0yn;{i`q,NI`93T2{
        var item_list12 = LibVars.workflowlibrary._formFields;
        for(var item_index12 in item_list12) {
          let item = item_list12[item_index12];
          // Block#: fe0oj*!QQ5WMS14rD3Rk
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'radio-buttons') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'OptionFormField')
          ) {
            return com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id');
          }
        }
        return '';
      }
      /**
       * Describe this function...
       */
      this.getOutcome = getOutcome;

      function getOutcome(id) {
        // Block#: z_OwH@Vp!,|V.m?-5rR7
        LibVars.workflowlibrary.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: aeK}#_56a0FW1;FlI/RA
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return LibVars.workflowlibrary.tempDict1;
        }
        // Block#: @-q#8vSu_;2Fy2N.F])N
        var item_list13 = LibVars.workflowlibrary._outcomes;
        for(var item_index13 in item_list13) {
          let item = item_list13[item_index13];
          // Block#: n6w*.;8h*VC,sx]BPLCz
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
            // Block#: =c~Nd@B.[P1(9iv[U:0C
            LibVars.workflowlibrary.tempDict1 = item;
          }
        }
        // Block#: Q:N_kRnFcj/3%}|gFkR,
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getOutcome by id : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary.tempDict1)));
        return LibVars.workflowlibrary.tempDict1;
      }
      /**
       * To retrieve all data coming from a specific field
       * (addressed by its UIObjRef) in the current form.
       */
      this.doesExistField = doesExistField;

      function doesExistField(id) {
        // Block#: G72*ZfWyTVTTF*YW+;u3
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return false;
        }
        // Block#: 0-zs0K4{G%DLexMoi@1l
        if(LibVars.workflowlibrary._formFields != null) {
          // Block#: $8p*?d{P+-m|/n`#OWXv
          var item_list14 = LibVars.workflowlibrary._formFields;
          for(var item_index14 in item_list14) {
            let item = item_list14[item_index14];
            // Block#: imU3?.3TfXu=qUOz[4Vg
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(item, 'id')) {
              // Block#: O{V`?*@eRf||XBK]`Z2J
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
                return true;
              }
              // Block#: u]nwgfv?0gzJ4|QKa8ba
              com.fc.JavaScriptDistLib.Debug.printLog(String('SDK  doesExistField (true) by ID ') + String(id));
            }
          }
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.getIdofFirstDropDownField = getIdofFirstDropDownField;

      function getIdofFirstDropDownField() {
        // Block#: (6HA`fN(9Sz3W(Lz8Ocd
        var item_list15 = LibVars.workflowlibrary._formFields;
        for(var item_index15 in item_list15) {
          let item = item_list15[item_index15];
          // Block#: pl5}DXcGGD{yp*vWMxKW
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'dropdown') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'OptionFormField')
          ) {
            return com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id');
          }
        }
        return '';
      }
      /**
       * Describe this function...
       */
      this.parseProcessData = parseProcessData;

      function parseProcessData(onlyTasks, taskName) {
        return new Promise(function(resolve, reject) {
          // Block#: @gAO(;-Sg]8To(=X}re4
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary._processData, 'tasks')) {
            // Block#: Yr/Jjy)mmHX]y^R@fYj.
            if(onlyTasks) {
              // Block#: LFd#A)k1i#tv7du[`:iA
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._processData, 'processDefinitionId', LibVars.workflowlibrary._processDefId);
              // Block#: DEb*@bhZ(iB+Q*4jdIfX
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._processData, 'processInstanceId', LibVars.workflowlibrary._processInstId);
            } else {
              // Block#: SP]WIS;PVMZed}w;E,%l
              LibVars.workflowlibrary._processDefId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._processData, 'processDefinitionId'));
              // Block#: )-n$f=^RE^s%/u/v5CG`
              LibVars.workflowlibrary._processInstId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._processData, 'processInstanceId'));
            }
            // Block#: {)K1fEF5ZmskQZ(gCUMf
            LibVars.workflowlibrary._tasks = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._processData, 'tasks'));
            // Block#: -|}FM!p8ouLw27^W5+^X
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.workflowlibrary._tasks.length, "NEQ", 0)) {
              // Block#: hjaU2,-{9{E4g6;?bkQH
              if(taskName == null) {
                // Block#: wznhThYgRvX5+o#UsnFF
                LibVars.workflowlibrary.tempNum = 0;
              } else {
                // Block#: l+-TCIW([@{]dFmVzBKP
                LibVars.workflowlibrary.tempNum = findTask(taskName);
              }
              // Block#: EKSB-:X05^]lT.T}3xo$
              com.fc.JavaScriptDistLib.Debug.printLog(['SDK  Parse process data using this index    ', LibVars.workflowlibrary.tempNum, ' to select the task in the list'].join(''));
              // Block#: 9n(mzPhQVqIP@tsP9}Q,
              if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.workflowlibrary.tempNum, "GTE", 0)) {
                // Block#: %Y.h?!mLo?*:XJ`?HC(x
                LibVars.workflowlibrary._task = LibVars.workflowlibrary._tasks[LibVars.workflowlibrary.tempNum];
                // Block#: @s+xVTyZu?vH{3/QqK/M
                LibVars.workflowlibrary._taskId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._task, 'taskId'));
                // Block#: ;lkB|GpVV+eKQ-NXc.[p
                LibVars.workflowlibrary._taskToBeCompleted = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['taskId', 'processVariables'], [LibVars.workflowlibrary._taskId, []]);
                // Block#: /n)2UnL6A#Yt+#`@=/!I
                com.fc.JavaScriptDistLib.Debug.printLog(['SDK task to be completed  ', 'was just created with  taskId and ', ' process Variables as empty list'].join(''));
                // Block#: w(1=`TR5)MjF5YS%4//%
                LibVars.workflowlibrary._processVariabes = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._task, 'processVariables'));
                // Block#: dt-R4,=3zf*9/Lf2{s(k
                LibVars.workflowlibrary._formProperties = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._task, 'formProperties'));
                // Block#: 13nFK!PGr8GVn`j}+K0a
                buildOutcomeAndFieldMappingList().then(response => {;
                });
                // Block#: tlpg10)NnX990p@Dib{h
                buildCurrentInitiator().then(response => {;
                });
                // Block#: lQV-ld|j0(,1c+}iRQK2
                LibVars.workflowlibrary._formKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._task, 'formKey'));
                // Block#: _xH3pb~tChiPpQO_m7%4
                if(LibVars.workflowlibrary._formKey != null) {
                  // Block#: o(t:yCA-?1Xwkj5l.`bo
                  if(LibVars.workflowlibrary._formKey != '') {
                    // Block#: Dcm3,A1%m7(Ld0be,b6q
                    com.fc.JavaScriptDistLib.Debug.printLog(String('SDK current Task list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._task))));
                    // Block#: ~|?3Hc+J|7y0s?}/MYHc
                    LibVars.workflowlibrary._formData = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._task, 'formData'));
                    // Block#: [?w3ImWd`tU6Gy)$L$oG
                    com.fc.JavaScriptDistLib.Debug.printLog(String('SDK current FormData list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._formData))));
                    // Block#: I_.O{No3oop2:d(jf,+^
                    LibVars.workflowlibrary._formName = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._formData, 'name'));
                    // Block#: `iy*JV!dKW79X(^@lpt,
                    if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._formData, 'fields')) == null) {
                      // Block#: f3ws+*g.~+!U]N$xxR11
                      LibVars.workflowlibrary._formFields = [];
                    } else {
                      // Block#: 6#|4G~yZXaOXUC/z9-3W
                      LibVars.workflowlibrary._formFields = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._formData, 'fields'));
                    }
                    // Block#: [%[RlD+;SFjjw_#uXGLy
                    com.fc.JavaScriptDistLib.Debug.printLog(String('SDK current FormFields number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary._formFields.length)));
                    // Block#: 8Bokob5@%F}4F$o9O-Ym
                    LibVars.workflowlibrary._outcomes = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._formData, 'outcomes'));
                    // Block#: `GuQb`Ket2{nA?)ypK%+
                    LibVars.workflowlibrary._formId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._formData, 'id'));
                    // Block#: 3mR|bI,_w:xDPPp!`yWL
                    buildTemplateKey().then(response => {;
                    });
                    // Block#: *(vF8uJk=}.eajVrOY5S
                    com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'formData', com.fc.JavaScriptDistLib.Dictionary.createDictionary(['id', 'key', 'name', 'fields'], [LibVars.workflowlibrary._formId, LibVars.workflowlibrary._formKey, LibVars.workflowlibrary._formName, []]));
                    // Block#: 4ztn~_pPUfT+$CuSOtcZ
                    com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'outcome', com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary());
                    // Block#: SbEu^j+BhYGK*7#yBG;H
                    com.fc.JavaScriptDistLib.Debug.printLog(['SDK  task to be completed, added ', 'formId formKey and formName:', LibVars.workflowlibrary._formId, ' ', LibVars.workflowlibrary._formKey, ' ', LibVars.workflowlibrary._formName, '  and fields as empty list'].join(''));
                  }
                }
              } else {
                // Block#: *w]5bGrB$}/{=EwsppeN
                eraseParsedTasks().then(response => {;
                });
              }
            } else {
              // Block#: }cF{ubs(?uKMmX=_xdGE
              eraseParsedTasks().then(response => {;
              });
            }
          } else {
            // Block#: R`K;C%o,{rT^ES.)8EH;
            if(onlyTasks == false) {
              // Block#: E#Cds}sp)(bP`iRL`A@h
              eraseParsedVars().then(response => {;
              });
            } else {
              // Block#: DT_2-W;?,?{zDoe@jp)o
              eraseParsedTasks().then(response => {;
              });
            }
          }
        });
      }
      /**
       * Describe this function...
       */
      this.eraseParsedVars = eraseParsedVars;

      function eraseParsedVars() {
        return new Promise(function(resolve, reject) {
          // Block#: :;k}H}ugLxKk@y`$!0.+
          LibVars.workflowlibrary._processDefId = '';
          // Block#: 4#+=3[=gnmpKOQe+lS2b
          LibVars.workflowlibrary._processInstId = '';
          // Block#: @klgC/T(4IX/WgYh24=/
          LibVars.workflowlibrary._processData = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: Tu5:|4f`Q0HDD8OoLA;9
          eraseParsedTasks().then(response => {;
          });
        });
      }
      /**
       * Describe this function...
       */
      this.eraseProcessInstances = eraseProcessInstances;

      function eraseProcessInstances() {
        return new Promise(function(resolve, reject) {
          // Block#: rxyAb{L]yataOl5ty$~p
          LibVars.workflowlibrary._processInstance = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: j%g1*^M^9htiO1N,!vXP
          LibVars.workflowlibrary._processInstances = [];
        });
      }
      /**
       * Describe this function...
       */
      this.getIndexOfFieldInTaskToBeCompleted = getIndexOfFieldInTaskToBeCompleted;

      function getIndexOfFieldInTaskToBeCompleted(id) {
        // Block#: 5=t7)tc,=*|1%EX*E:ar
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary._taskToBeCompleted, 'formData')) {
          // Block#: e^MNyo:cL}rgzwQiDh:W
          LibVars.workflowlibrary.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'formData'), 'fields'));
          // Block#: I8*RkEssW?gZN6oC^`fv
          LibVars.workflowlibrary.tempN2 = 0;
          // Block#: Rmax|B_*1=ZM(jS@if@z
          while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.workflowlibrary.tempN2, "LT", LibVars.workflowlibrary.tempList.length)) {
            // Block#: Vd=`^eeI0qj+J}/%LOK$
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempList[LibVars.workflowlibrary.tempN2], 'id'), "EQUAL", id)) {
              return LibVars.workflowlibrary.tempN2;
            }
            // Block#: Z{Jl#bGbdcj];r]_hB?%
            LibVars.workflowlibrary.tempN2 = LibVars.workflowlibrary.tempN2 + 1;
          }
        }
        return -1;
      }
      /**
       * Describe this function...
       */
      this.parseProcessInstances = parseProcessInstances;

      function parseProcessInstances() {
        return new Promise(function(resolve, reject) {
          // Block#: A+6!5KzJQo/kx!@}Et:g
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.workflowlibrary._processInstances.length, "GT", 0)) {
            // Block#: f5%|B..:cO+qaH/~Zye1
            LibVars.workflowlibrary._processInstance = LibVars.workflowlibrary._processInstances[0];
            // Block#: c-;=6HC9M$?A#fcC5)-2
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary._processInstance, 'processInstanceId')) {
              // Block#: e1I,qRai}Ej2NQ_D2mB|
              com.fc.JavaScriptDistLib.Debug.printLog(['SDK parseProcessInstances num of instances: ', LibVars.workflowlibrary._processInstances.length, '  list of keys in the first instance: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._processInstance)))].join(''));
            }
          } else {
            // Block#: ]Hdx)(J/f!Pd:P7lp,Z1
            LibVars.workflowlibrary._processInstance = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
            // Block#: 13[HIvY12@6=}71jk5/I
            com.fc.JavaScriptDistLib.Debug.printLog('SDK parseProcessInstances NO instances');
          }
        });
      }
      /**
       * Describe this function...
       */
      this.eraseParsedTasks = eraseParsedTasks;

      function eraseParsedTasks() {
        return new Promise(function(resolve, reject) {
          // Block#: `1)6I?;*46Elnhk!$W-%
          LibVars.workflowlibrary._tasks = [];
          // Block#: ]erpGI6Z!az:aaD*0IMe
          LibVars.workflowlibrary._task = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: tsGx{m1uu,{DX]t/$:1A
          LibVars.workflowlibrary._taskToBeCompleted = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: L$AjHOz3TmMbAy:IH!6(
          LibVars.workflowlibrary._taskId = '';
          // Block#: E/4U*6@{zzW-2_iiNoAv
          LibVars.workflowlibrary._processVariabes = [];
          // Block#: yvsCWM*;UKj4XKK6hFA4
          LibVars.workflowlibrary._formKey = '';
          // Block#: 4DX?v}b)@G|W2MFTa=;M
          LibVars.workflowlibrary._formName = '';
          // Block#: }n|T|=,dlISig~Y?W-Mx
          LibVars.workflowlibrary._formProperties = [];
          // Block#: -?Waxyi;sEo1UMZiyL]Y
          LibVars.workflowlibrary._outcomeAndFieldMapping = [];
          // Block#: rE)vDJewW2F{[A7rk$#5
          LibVars.workflowlibrary._templateType = '';
          // Block#: _is#z`ZULGZl!a_NauGg
          LibVars.workflowlibrary._templateKey = '';
          // Block#: Ayd96ng%IgXwf28dtSEx
          LibVars.workflowlibrary._formData = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: pHR%GqwfZG[oqh_(Y0MH
          LibVars.workflowlibrary._formFields = [];
          // Block#: {YG|c3Fb12Ro}cZ[9gCq
          LibVars.workflowlibrary._outcomes = [];
          // Block#: |[z2#-caB;%Pd/=[|f31
          LibVars.workflowlibrary._formId = '';
        });
      }
      /**
       * Describe this function...
       */
      this.buildTemplateKey = buildTemplateKey;

      function buildTemplateKey() {
        return new Promise(function(resolve, reject) {
          // Block#: [SyH.#_-!8t(}vV+!]^r
          LibVars.workflowlibrary._templateKey = '';
          // Block#: Ag5u~N%yOV)||l]b0^lU
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary._formData, 'properties')) {
            // Block#: iWd7*23H#sqw+wfT^MFF
            LibVars.workflowlibrary.tempDict1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._formData, 'properties'));
            // Block#: j@$$-rt-WX$u2}g.j5Ak
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary.tempDict1, 'templateKey')) {
              // Block#: GhC~vu/a#D(a~p%@KXYR
              LibVars.workflowlibrary._templateKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict1, 'templateKey'));
            }
          }
        });
      }
      /**
       * Describe this function...
       */
      this.getIndexOfVarInTaskToBeCompleted = getIndexOfVarInTaskToBeCompleted;

      function getIndexOfVarInTaskToBeCompleted(name2) {
        // Block#: keut5NnNVASw]WxPR@s;
        LibVars.workflowlibrary.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'processVariables'));
        // Block#: 6B7]HI%Y.#Ryu:^p|8Vl
        LibVars.workflowlibrary.tempN2 = 0;
        // Block#: |oK40tIWA!G)nm0(!#{#
        while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.workflowlibrary.tempN2, "LT", LibVars.workflowlibrary.tempList.length)) {
          // Block#: ``J|E}D/!f~A@;(OT{jy
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempList[LibVars.workflowlibrary.tempN2], 'name'), "EQUAL", name2)) {
            return LibVars.workflowlibrary.tempN2;
          }
          // Block#: +9z_@/4V1Jjk$_#N5B.v
          LibVars.workflowlibrary.tempN2 = LibVars.workflowlibrary.tempN2 + 1;
        }
        return -1;
      }
      /**
       * Describe this function...
       */
      this.setQueryVarInitiator = setQueryVarInitiator;

      function setQueryVarInitiator(inputDict) {
        // Block#: I`C*@9m{sn9c]v}6dnv*
        LibVars.workflowlibrary.tempDict = inputDict;
        // Block#: [S_s%}=?(;v%vsnm]:{p
        if(LibVars.workflowlibrary._initiator != null) {
          // Block#: Xw|Dfl+,w{-|0ltSXXli
          if(!com.fc.JavaScriptDistLib.TextLib.textComparison(LibVars.workflowlibrary._initiator, "EQUAL", '')) {
            // Block#: ;t],Gxq}M}S+%nP90]7;
            if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary.tempDict, 'queryVariables'))) {
              // Block#: nO3?[}L8RY0-9[hmN[+q
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict, 'queryVariables', []);
            }
            // Block#: 2Sp2gT#p/y!IWM5vevAa
            LibVars.workflowlibrary.tempNum = 0;
            // Block#: Y}SNhFxy2P/ExErGTg2!
            LibVars.workflowlibrary.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, 'queryVariables'));
            // Block#: h8r8Dw9qtI7.+.LJkN_+
            var item_list16 = LibVars.workflowlibrary.tempList;
            for(var item_index16 in item_list16) {
              let item = item_list16[item_index16];
              // Block#: JRdHih:eqQ-g?iGN$d_j
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", 'initiator')) {
                // Block#: Ta+xCSU=LZd)lxB3NgjU
                LibVars.workflowlibrary.tempDict1 = item;
                // Block#: Ih]Yt~lm~L4A$drxq]tF
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict1, 'value', LibVars.workflowlibrary._initiator);
                // Block#: M6cW/C`;U/q^fS9L[Ej*
                LibVars.workflowlibrary.tempList[LibVars.workflowlibrary.tempNum] = LibVars.workflowlibrary.tempDict1;
                // Block#: b8XTt8?7G*(ol#^n()E_
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict, 'queryVariables', LibVars.workflowlibrary.tempList);
                // Block#: ekdY(*D4A!*$smi,OF{p
                com.fc.JavaScriptDistLib.Debug.printLog(['SDK setQueryVarInitiator .. updating initiator value at index: ', LibVars.workflowlibrary.tempNum, '  value is: ', LibVars.workflowlibrary._initiator].join(''));
                // Block#: m?AKo%Adnv9FMq6Dt:7b
                if(true) {
                  return LibVars.workflowlibrary.tempDict;
                }
              }
              // Block#: aT~mP3uMj`0L^4p[X$8%
              LibVars.workflowlibrary.tempNum = LibVars.workflowlibrary.tempNum + 1;
            }
            // Block#: ouS*NN(l-!a8Ff4n!qee
            LibVars.workflowlibrary.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', LibVars.workflowlibrary._initiator, 'equals', 'string']);
            // Block#: -?k/m#jcx/L7BU^]q)=C
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.workflowlibrary.tempList, LibVars.workflowlibrary.tempDict1)
            // Block#: zwxfx]Snmt,dhQIVd/x$
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict, 'queryVariables', LibVars.workflowlibrary.tempList);
            // Block#: du/brfY=h5-7zd%K:04|
            com.fc.JavaScriptDistLib.Debug.printLog(String('SDK setQueryVarInitiator .. adding initiator value: ') + String(LibVars.workflowlibrary._initiator));
          }
        }
        return LibVars.workflowlibrary.tempDict;
      }
      /**
       * Describe this function...
       */
      this.buildOutcomeAndFieldMappingList = buildOutcomeAndFieldMappingList;

      function buildOutcomeAndFieldMappingList() {
        return new Promise(function(resolve, reject) {
          // Block#: !zTRIn_acFMrK?Qf3uuD
          LibVars.workflowlibrary._outcomeAndFieldMapping = [];
          // Block#: s9I,tr88FpWEs8]EaSP}
          LibVars.workflowlibrary._templateType = '';
          // Block#: -@#eG~U^wUN{4U5{;s%q
          var item_list17 = LibVars.workflowlibrary._formProperties;
          for(var item_index17 in item_list17) {
            let item = item_list17[item_index17];
            // Block#: ?xKhVH~{w,}O*{s)K4lp
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", 'outcomeAndFieldMapping')) {
              // Block#: ,O7OB-6,?b!frFT$`:Iz
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'enum')) {
                // Block#: =udcCLDdQ[hOmcD?;RJQ
                LibVars.workflowlibrary._outcomeAndFieldMapping = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'enumValues'));
              }
            } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", 'TemplateType')) {
              // Block#: bfT8Pyt-47nEF{@LPX/*
              LibVars.workflowlibrary._templateType = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'));
            }
          }
          // Block#: AOC3_A!HOy:1Vt=_jSkr
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK buildOutcomeAndFieldMapping - num of items: ') + String(safeLength(LibVars.workflowlibrary._outcomeAndFieldMapping)));
          // Block#: IqKY2LntscRsSm9L0vt,
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK buildTemplateType: ') + String(LibVars.workflowlibrary._templateType));
        });
      }
      /**
       * Describe this function...
       */
      this.safeLength = safeLength;

      function safeLength(inputList) {
        // Block#: glI,/-IIC2m3q(#B@0pr
        if(inputList == null) {
          return 0;
        }
        // Block#: GSO$$)x|O|7tr+uS(*0v
        if(!inputList.length) {
          return 0;
        }
        return inputList.length;
      }
      /**
       * Describe this function...
       */
      this.buildVar = buildVar;

      function buildVar(name2, value) {
        // Block#: w)Yy*@v@2W+!Xz%A9Iko
        LibVars.workflowlibrary.tempDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value'], [name2, value]);
        // Block#: p~+:u^kv.$ZD!j]b4eXU
        com.fc.JavaScriptDistLib.Debug.printLog(String('SDK buildVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary.tempDict))));
        return LibVars.workflowlibrary.tempDict;
      }
      /**
       * Describe this function...
       */
      this.buildCurrentInitiator = buildCurrentInitiator;

      function buildCurrentInitiator() {
        return new Promise(function(resolve, reject) {
          // Block#: #dx0sJ3OcN9E!dSn,@w}
          LibVars.workflowlibrary._currentInitiator = '';
          // Block#: jHrhOwD8VquA{dXlLdJ*
          LibVars.workflowlibrary.tempList1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._task, 'processVariables'));
          // Block#: TyeWO=ugu[|]vH}2ZvkP
          var item_list18 = LibVars.workflowlibrary.tempList1;
          for(var item_index18 in item_list18) {
            let item = item_list18[item_index18];
            // Block#: 9?C74H7ixEt$W%90ZT~;
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", 'initiator')) {
              // Block#: yI~y8%,|JLTZifJ/^dAU
              LibVars.workflowlibrary._currentInitiator = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'value'));
            }
          }
        });
      }
      com.fc.JavaScriptDistLib.SnapClinical.configure('{"api":{"url":"https://developnew.snapclinical.net","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":true,"frontEndKey":"mobileApp"}}');
    };
    var workflowlibrary = new WorkflowLibrary();
    LibVars.snapclinicallogiccomponent.formFields = null;
    LibVars.snapclinicallogiccomponent.rankingListField = null;
    LibVars.snapclinicallogiccomponent.nextProcessAfterCompletion = null;
    LibVars.snapclinicallogiccomponent.FormFieldRef = null;
    /**
     * To setup the user name and the password to access to the
     * workflow. Start from here to interact with the workflow.
     */
    this.inititializeSnapClinical = inititializeSnapClinical;

    function inititializeSnapClinical(User, Password) {
      return new Promise(function(resolve, reject) {
        // To setup the user name and the password to access to the
        // workflow. Start from here to interact with the workflow.
        // Block#: k^GHRqycqdW4/ceYkGV@
        workflowlibrary.initWorkflowWithCredentials(User, Password, null).then(response => {;
        });
      });
    }
    /**
     * Saves the results of a ranking list
     */
    this.saveRankingList = saveRankingList;

    function saveRankingList(rankingOptions) {
      return new Promise(function(resolve, reject) {
        // Block#: 0Zkb:C]`tXqSx+}E0qN;
        for(var item_index in rankingOptions) {
          let item = rankingOptions[item_index];
          // Block#: /p)vw+BHyO@ZtV+[h]I2
          saveFormField((com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'params'), 'uiobjref')), (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'value'))).then(response => {;
          });
        }
      });
    }
    /**
     * Returns a field that can be used with the
     * constructor function of the RankingList library.
     */
    this.getRankingListField = getRankingListField;

    function getRankingListField() {
      // To retrieve all data coming from all the fields in the current form.
      // Block#: 4}Afiy%=W-qvW39/76F0
      LibVars.snapclinicallogiccomponent.formFields = workflowlibrary.getFields();
      // Block#: IA~1|Bdv$kXAB_^F+,3?
      LibVars.snapclinicallogiccomponent.rankingListField = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'options'], ['', []]);
      // Block#: @{voRTCXeO`~~IJ=!#TW
      var item_list = LibVars.snapclinicallogiccomponent.formFields;
      for(var item_index2 in item_list) {
        let item = item_list[item_index2];
        // Block#: }IjyW(7*elQ/cA{WEXL)
        if(com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), 'rankingoption')) {
          // Block#: eaL#V3uvWPZ4U0J=UCH9
          com.fc.JavaScriptDistLib.ListLibrary.listAdd((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.snapclinicallogiccomponent.rankingListField, 'options')), item)
        } else if(com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), 'rankingPrompt')) {
          // Block#: lM4PF-d/IJ2E_(/M*l]i
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.snapclinicallogiccomponent.rankingListField, 'name', com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'expression')));
        }
      }
      return LibVars.snapclinicallogiccomponent.rankingListField;
    }
    /**
     * Returns a list of all fields and their data in current form
     */
    // To retrieve all data coming from all the fields in the current form.
    this.getFields = getFields;

    function getFields() {
      return workflowlibrary.getFields();
    }
    /**
     * To complete the current task and get the next one if it exists.
     * You have to specify the outcome's ID (valid outcome of the current task).
     */
    this.completeTask = completeTask;

    function completeTask(outcomeId) {
      return new Promise(function(resolve, reject) {
        // To complete the current task and get the next one if it exists.
        // You have to specify the outcome's name (valid outcome of the current task).
        // Block#: |#7!LU4|cLBkk~aq`P;C
        workflowlibrary.completeAndGetNextTaskById(outcomeId).then(response => {;
          if(response.name === "success") {
            // To check if another task is available (true) or the current flow is at the end (false).
            // Block#: :eV9AAXG,g/!n+yfs/_=
            if(workflowlibrary.doesExistCurrentTask()) {
              // Describe this function...
              // Block#: !{KSNl/Kf_bKb2WBYVP!
              com.fc.JavaScriptDistLib.Screen.displayScreenWithName(workflowlibrary.getTemplateKey());
            } else {
              // Block#: /onn74Mo)4FW{F;q(@tY
              onFlowCompletion().then(response => {;
              });
            }
            // Block#: VCP$2nf.l,so~42$Rj|q
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(getProcessVariable('switchToProcess'), 'value')) {
              // Block#: lbL0c0$o0m/N6C2)0_nF
              LibVars.snapclinicallogiccomponent.nextProcessAfterCompletion = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(getProcessVariable('switchToProcess'), 'value'));
            }
            // Block#: *%)0P5{n,gxV]ULVKF)+
            resolve({
              name: "success",
              data: response.data
            });
          }
          if(response.name === "failure") {
            // Block#: 7k)}.$0WVG^pC57xkZdg
            resolve({
              name: "failure",
              data: response.data
            });
          }
        });
      });
    }
    /**
     * To start a new instance of the workflow or to resume the last run of it.
     * You must specify
     * - processDefinitionKey will be your Process Identifier (text)
     * - forceStartNewInstance will be set to true if you want to start
     * a new instance or to false if you need to resume an old one.
     */
    this.startNewFlow = startNewFlow;

    function startNewFlow(ProcessDefinitionKey, StartNewFlow) {
      return new Promise(function(resolve, reject) {
        // To start a new instance of the workflow or to resume the last run of it.
        // You must specify
        // - processDefinitionKey will be your Process Identifier (text)
        // - forceStartNewInstance will be set to true if you want to start
        // a new instance or to false if you need to resume an old one.
        // Block#: sEjP?,$S*S_flWn}o,p(
        workflowlibrary.startNewProcessInstance(ProcessDefinitionKey, StartNewFlow).then(response => {;
          if(response.name === "success") {
            // To check if another task is available (true) or the current flow is at the end (false).
            // Block#: Ht|#g4M+u`|AEWb+g(ZZ
            if(workflowlibrary.doesExistCurrentTask()) {
              // Describe this function...
              // Block#: Fj50SG*98,f^aV8^h6GI
              com.fc.JavaScriptDistLib.Screen.displayScreenWithName(workflowlibrary.getTemplateKey());
            } else {
              // Block#: !KG`p2o.Q9Cg71ilD2rU
              onFlowCompletion().then(response => {;
              });
            }
            // Block#: V-xIt{@a~~tbe]-gk=SU
            resolve({
              name: "success",
              data: response.data
            });
          }
          if(response.name === "failure") {
            // Block#: 2f7Kwe*F?H-L^p24*,U.
            resolve({
              name: "failure",
              data: response.data
            });
          }
        });
      });
    }
    /**
     * To get the outcome name by ID
     */
    // Describe this function...
    this.getOutcome = getOutcome;

    function getOutcome(id) {
      return workflowlibrary.getOutcomeName(id);
    }
    /**
     * To check if exists an outcome with the specified ID...
     */
    // Describe this function...
    this.doesOutcomeExist = doesOutcomeExist;

    function doesOutcomeExist(id) {
      return workflowlibrary.doesExistOutcome(id);
    }
    /**
     * To get the current ScreenName
     */
    // Describe this function...
    this.getTemplateKey = getTemplateKey;

    function getTemplateKey() {
      return workflowlibrary.getTemplateKey();
    }
    /**
     * Describe this function...
     */
    this.saveFormField = saveFormField;

    function saveFormField(UIObjectReference, value) {
      return new Promise(function(resolve, reject) {
        // To set the value of a specific field (addressed
        // by its UIObjRef) in the current form.
        // Block#: 6YLSaPo0ukG(,4oLhZ(^
        workflowlibrary.setFieldByRef(UIObjectReference, value).then(response => {;
        });
      });
    }
    /**
     * To retrieve all data coming from a specific field
     * (addressed by its UIObjRef) in the current form.
     */
    this.getFormField = getFormField;

    function getFormField(UIObjectReference) {
      // To retrieve all data coming from a specific field (addressed by its UIObjRef) in the current form.
      // Block#: 4`XwV}#QpE5V/#v`$Q`C
      LibVars.snapclinicallogiccomponent.FormFieldRef = workflowlibrary.findFieldByRef(UIObjectReference);
      // Block#: vFO_$v5`A{YBV9#37O^A
      if(!(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.snapclinicallogiccomponent.FormFieldRef)).length) {
        return '';
      }
      // To retrieve the value of a specific field (addressed by its UIObjRef) in the current form
      // Block#: T@VF{Cir;pop_SmWghO:
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.snapclinicallogiccomponent.FormFieldRef, 'type'), "EQUAL", 'expression')) {
        return workflowlibrary.findFieldValueByRef(UIObjectReference);
      }
      return LibVars.snapclinicallogiccomponent.FormFieldRef;
    }
    /**
     * To manage all the actions needed when the flow is ended
     */
    this.onFlowCompletion = onFlowCompletion;

    function onFlowCompletion() {
      return new Promise(function(resolve, reject) {
        com.fc.JavaScriptDistLib.EventListeners.invoke("onFlowCompletion", "4asc4jigsk", []);
      });
    }
    /**
     * To get the current ScreenName
     */
    // Describe this function...
    this.getCheckBoxes = getCheckBoxes;

    function getCheckBoxes() {
      return workflowlibrary.getCheckBoxFields();
    }
    /**
     * Describe this function...
     */
    this.saveCheckBoxesForm = saveCheckBoxesForm;

    function saveCheckBoxesForm(checkBoxValues) {
      return new Promise(function(resolve, reject) {
        // Describe this function...
        // Block#: CF02e7ah@P@xRqi+N`|:
        workflowlibrary.setCheckBoxFields(checkBoxValues).then(response => {;
        });
      });
    }
    /**
     * To get the current ScreenName
     */
    // Describe this function...
    this.getFormProperties = getFormProperties;

    function getFormProperties() {
      return workflowlibrary.getFormProperties();
    }
    /**
     * To check if exists an outcome with the specified ID...
     */
    // Describe this function...
    this.getFormProperty = getFormProperty;

    function getFormProperty(id) {
      return workflowlibrary.getFormProperty(id);
    }
    /**
     * To check if exists an outcome with the specified ID...
     */
    // Describe this function...
    this.getProcessVariable = getProcessVariable;

    function getProcessVariable(name2) {
      return workflowlibrary.getProcessVariable(name2);
    }
    /**
     * App will check the network status, so if device is back
     * online, all offline requests will be sent to server.
     */
    this.startAutomaticSyncToRemote = startAutomaticSyncToRemote;

    function startAutomaticSyncToRemote() {
      return new Promise(function(resolve, reject) {
        // Block#: X?Xnv,Z2Vsgm~Jz@HkY/
        com.fc.JavaScriptDistLib.Network.startMonitoring(function() {
            try {
              // Block#: M?y3F_T?eE3I}[k_w%|*
              com.fc.JavaScriptDistLib.Debug.printLog('****** Device is online ******');
              // Block#: 311?efS{j|6XY;_3.K]i
              com.fc.JavaScriptDistLib.SnapClinical.syncToRemote();
            } catch(e) {
              com.fc.JavaScriptDistLib.handleExceptionNative(e);
            };
          },
          function() {
            try {
              // Block#: /2q0jSU6Lr~n6/o.r.wM
              com.fc.JavaScriptDistLib.Debug.printLog('***** Running offline *****');
            } catch(e) {
              com.fc.JavaScriptDistLib.handleExceptionNative(e);
            };
          });
      });
    }
    /**
     * Describe this function...
     */
    this.stopAutomaticSyncToRemote = stopAutomaticSyncToRemote;

    function stopAutomaticSyncToRemote() {
      return new Promise(function(resolve, reject) {
        // Block#: x)TaDx`!Q1CpEQ#;sWqd
        com.fc.JavaScriptDistLib.Network.stopMonitoring();
      });
    }
    /**
     * Describe this function...
     */
    this.saveProcessToCache = saveProcessToCache;

    function saveProcessToCache(processKey) {
      return new Promise(function(resolve, reject) {
        // Block#: HhDskAUhKyEWS[vL_A#P
        com.fc.JavaScriptDistLib.SnapClinical.fetch((String('/flow-api/snap-api/get-xml-bpmn-and-forms?processKey=') + String(processKey)), "GET", JSON.stringify(),
          function(data) {
            // Block#: gL_jn1YN6tDd01*zl@Ti
            com.fc.JavaScriptDistLib.Storage.add(String(processKey) + String('_key'), processKey, 'sn4pCl1n1C@l0ffl1n3Mod3!!'); // Block#: _(3z(aL}GXRo=nX8@G5x
            com.fc.JavaScriptDistLib.Storage.add(String(processKey) + String('_xml'), com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'xmlBpmn'), 'sn4pCl1n1C@l0ffl1n3Mod3!!'); // Block#: [~ffha1l(4]7%:18D~l,
            com.fc.JavaScriptDistLib.Storage.add(String(processKey) + String('_forms'), com.fc.JavaScriptDistLib.JSON.covertToJSON(com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'forms')), 'sn4pCl1n1C@l0ffl1n3Mod3!!'); // Block#: q-t~%8cS5OJt7ijje[o|
            resolve({
              name: "then",
              data: data
            });
          },
          function(error) {
            // Block#: +~-b[c!{N:_SOG`l6-GE
            resolve({
              name: "catch",
              data: error
            });
          });
      });
    }
    com.fc.JavaScriptDistLib.Screen.screenPopInit();
  };
  var snapclinicallogiccomponent = new snapClinicalLogicComponent();

  function EQ5D5LOffline() {
    lib_instance = "wyeqrkcjg0";
    LibVars.eq5d5loffline = LibVars.eq5d5loffline || {};

    function RadioButtonsUIComponentEQ5D5L() {
      lib_instance = "xatsx3p4pt";
      LibVars.radiobuttonsuicomponenteq5d5l = LibVars.radiobuttonsuicomponenteq5d5l || {};
      LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_form = null;
      LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_chosen = null;
      /**
       * Describe this function...
       */
      this.isSelected = isSelected;

      function isSelected(index) {
        // Block#: .`OdvDU3D/%[wq(}jJG~
        if(LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_chosen == null) {
          return false;
        }
        // Block#: z]r4k3M;!jX8E/v%Ofx@
        if(LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_chosen == (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_form, 'options'))[index], 'id'))) {
          return true;
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.getChoiceNum = getChoiceNum;

      function getChoiceNum() {
        // Block#: W(5zoR4P]hIe;;[$m`*N
        if(LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_form == null) {
          return 0;
        }
        return(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_form, 'options')).length;
      }
      /**
       * Returns the selected choice.
       */
      this.getEQ5D5LRadioButtonsId = getEQ5D5LRadioButtonsId;

      function getEQ5D5LRadioButtonsId() {
        // Block#: IT;Yx4E@q.L)/0%bLn^N
        if(LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_chosen == null) {
          return null;
        }
        return LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_chosen;
      }
      /**
       * Returns the selected choice.
       */
      this.getEQ5D5LRadioButtonsValue = getEQ5D5LRadioButtonsValue;

      function getEQ5D5LRadioButtonsValue() {
        // Block#: =DQpUS!5.Bsi:iH/H,|A
        if(LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_chosen == null) {
          return null;
        }
        return LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_chosen;
      }
      /**
       * This function will show or hide the input from screen layout.
       */
      this.display = display;

      function display(visible) {
        return new Promise(function(resolve, reject) {
          // Block#: dq8@(Uf|R]WXAG8t!$J,
          if(visible) {
            // Block#: @#T]KSB}1ilGi6vn}e}S
            $('[obj-name="_dummyEQ5D5LRBInput_EQ5D5LRBRBLV"]').show();
          } else {
            // Block#: %=:[fXs21+tt?}Ru4)@X
            $('[obj-name="_dummyEQ5D5LRBInput_EQ5D5LRBRBLV"]').hide();
          }
        });
      }
      /**
       * Generates the choice list for radio buttons using field from api response.
       */
      this.setEQ5D5LRadioButtons = setEQ5D5LRadioButtons;

      function setEQ5D5LRadioButtons(field) {
        return new Promise(function(resolve, reject) {
          // Block#: G:5v5K((+6C1^^D#/3ul
          if(field != null) {
            // Block#: c!U{WhY:We*sa86@Gxd+
            if(LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_chosen != null) {
              // Block#: ea2W+v6,+{HI~sx0qtRW
              LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_chosen = null;
            }
            // Block#: z4r{x-mg/uwNvy;f3Of(
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'type'), "EQUAL", 'radio-buttons')) {
              // Block#: p~spO)y=pN+#n!Omq7[j
              LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_form = field;
              // Block#: V4%Of.N%PMWuZNF.D7d=
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("EQ5D5LRBInput_LEQ5D5L", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'name'))); // Block#: H/V/sqgMoh3XN#f9V-Jj
              if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(field, 'value')) {
                // Block#: 2@-HBS]W8oBi^`kt:EXh
                if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'value')) != null) {
                  // Block#: =h%9*,QnPO|=D;b[jenN
                  LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_chosen = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'value'));
                }
              }
              // Block#: LY%*1/0]Wp@pf~j$G@a|
              hideError().then(response => {;
              });
              // Block#: cDOYpi.Z5Lo*@[{cX}13
              com.fc.JavaScriptDistLib.ListView.saveTemplateCell('EQ5D5LRBInput_EQ5D5LRBRBLV');
              com.fc.JavaScriptDistLib.ListView.removeAllCells('EQ5D5LRBInput_EQ5D5LRBRBLV');
              on_listview_length_configured_EQ5D5LRBInput_EQ5D5LRBRBLV();
              // Block#: h3VcUUX2,h`pR7cS)te!
              $('[obj-name="_dummyEQ5D5LRBInput_EQ5D5LRBRBLV"]').show();
            }
          }
        });
      }
      /**
       * Returns the selected choice.
       */
      this.hasEQ5D5LRadioButtonsValue = hasEQ5D5LRadioButtonsValue;

      function hasEQ5D5LRadioButtonsValue() {
        // Block#: uT@N)Ka}qdUAbibDTwB]
        if(LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_chosen != null) {
          return true;
        }
        return false;
      }
      /**
       * Returns the selected choice.
       */
      this.getEQ5D5LRadioButtonOptionName = getEQ5D5LRadioButtonOptionName;

      function getEQ5D5LRadioButtonOptionName() {
        // Block#: ACYLJUx.@]i]r1vKTd1r
        var index_end = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_form, 'options')).length - 1;
        var index_inc = 1;
        if(0 > index_end) {
          let index_inc = -index_inc;
        }
        for(index = 0; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
          // Block#: THQ}.?UFL54.UXCae]kG
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_form, 'options'))[index], 'id'), "EQUAL", LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_chosen)) {
            return com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_form, 'options'))[index], 'name');
          }
        }
        return '';
      }
      /**
       * This will hide error message.
       */
      this.hideError = hideError;

      function hideError() {
        return new Promise(function(resolve, reject) {
          // Block#: }N(6DKS#9;!@0+x`_p;#
          $('[obj-name="_dummyEQ5D5LRBInput_ErrorMsg"]').hide();
        });
      }
      /**
       * This function will set error text given the provided
       * message. The error will show up right after the update.
       */
      this.setError = setError;

      function setError(message) {
        return new Promise(function(resolve, reject) {
          // Block#: 9!fwE1..,ln6b[1C9++v
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("EQ5D5LRBInput_ErrorMsg", (com.fc.JavaScriptDistLib.TextLib.convertToText(message))); // Block#: w|z*Kj/z-:7)qb6N.9Hp
          $('[obj-name="_dummyEQ5D5LRBInput_ErrorMsg"]').show();
        });
      }
      /**
       * If input requires a value, it will check if user selected a choice or not.
       */
      this.isValid = isValid;

      function isValid() {
        // Block#: 27Xs)+-sake0^RKl?bn4
        if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_form, 'required')) && LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_chosen == null) {
          return false;
        }
        return true;
      }
      // Block#: *-1*q`=;3lMIUq(x,NI-
      function on_listview_cell_configured_EQ5D5LRBInput_EQ5D5LRBLVC(EQ5D5LRBInput_EQ5D5LRBLVC, number) {
        try {
          // Block#: ,hcxE;uS}_%#NH+dp[Z=
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("EQ5D5LRBInput_EQ5DRBText", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_form, 'options'))[number], 'name'))); // Block#: 79i3]n)?$;$IB`l$a+(X
          if(isSelected(number)) {
            // Block#: ~Yc$r6_[{uPJ{Sqf#~?}
            com.fc.JavaScriptDistLib.Image.setProperty["Image"]("EQ5D5LRBInput_EQ5DRBIcon", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.eq5d5l/click.snapp.user81.radiobuttonsuicomponent/buttonClicked.png")));
          } else {
            // Block#: y,*?Rb^m(1m*qDe+v5)=
            com.fc.JavaScriptDistLib.Image.setProperty["Image"]("EQ5D5LRBInput_EQ5DRBIcon", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.eq5d5l/button.png")));
          }
          // Block#: J5w,4.z~*ce{b#Os6xA_
          if(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_form, 'readOnly')) {
            // Block#: JiP.PT%Pl7799}RK%Uov
            com.fc.JavaScriptDistLib.ListView.setProperty["Alpha"](EQ5D5LRBInput_EQ5D5LRBLVC, 50);
          } else {
            // Block#: |.+UQkG;XK%##Z{duP0L
            com.fc.JavaScriptDistLib.ListView.setProperty["Alpha"](EQ5D5LRBInput_EQ5D5LRBLVC, 100);
          }
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      };
      com.fc.JavaScriptDistLib.ListView.setConfigCallback('_dummyEQ5D5LRBInput_EQ5D5LRBLVC', on_listview_cell_configured_EQ5D5LRBInput_EQ5D5LRBLVC);
      // Block#: (U/IY;mnw@+LI-)RKeMG
      function on_listview_cell_clicked_EQ5D5LRBInput_EQ5D5LRBLVC(EQ5D5LRBInput_EQ5D5LRBLVC, number) {
        try {
          // Block#: CXG4lYA:qPMm8@sr]E*V
          if(!(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_form, 'readOnly'))) {
            // Block#: 8s0%[R(WDaZ54sI8VTg*
            LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_chosen = (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l.singlechoice_form, 'options'))[number], 'id'));
            // Block#: ES/3qD5cnIf;ZuYHC$$0
            com.fc.JavaScriptDistLib.ListView.saveTemplateCell('EQ5D5LRBInput_EQ5D5LRBRBLV');
            com.fc.JavaScriptDistLib.ListView.removeAllCells('EQ5D5LRBInput_EQ5D5LRBRBLV');
            on_listview_length_configured_EQ5D5LRBInput_EQ5D5LRBRBLV();
            // Block#: AT*/2w#7yVc)iS,}pJO@
            hideError().then(response => {;
            });
          }
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      }
      com.fc.JavaScriptDistLib.ListView.setClickCallback('_dummyEQ5D5LRBInput_EQ5D5LRBLVC', on_listview_cell_clicked_EQ5D5LRBInput_EQ5D5LRBLVC);
      // Block#: o34rL]Kq2N9/xW1L@Nm2
      function on_listview_length_configured_EQ5D5LRBInput_EQ5D5LRBRBLV() {
        try {
          com.fc.JavaScriptDistLib.ListView.configureCells('EQ5D5LRBInput_EQ5D5LRBRBLV', getChoiceNum());
          $('[obj-name="_dummyEQ5D5LRBInput_EQ5D5LRBRBLV"]').children().each(function(i) {
            if(i >= 0) {
              com.fc.JavaScriptDistLib.ListView.setContext($(this));
              com.fc.JavaScriptDistLib.ListView.executeConfigCallback('_dummyEQ5D5LRBInput_EQ5D5LRBRBLV', $(this), i);
              com.fc.JavaScriptDistLib.ListView.executeConfigHeightCallback('_dummyEQ5D5LRBInput_EQ5D5LRBRBLV', $(this), i);
              com.fc.JavaScriptDistLib.ListView.resetContext($(this));
            }
          });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      };
    };
    var radiobuttonsuicomponenteq5d5l = new RadioButtonsUIComponentEQ5D5L();

    function RadioButtonsUIComponentEQ5D5L_EQ5D5LRBInput(instance) {
      lib_instance = "xatsx3p4pt" + instance;
      LibVars.radiobuttonsuicomponenteq5d5l[instance] = LibVars.radiobuttonsuicomponenteq5d5l[instance] || {};
      LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_form = null;
      LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_chosen = null;
      /**
       * Describe this function...
       */
      this.isSelected = isSelected;

      function isSelected(index) {
        // Block#: .`OdvDU3D/%[wq(}jJG~
        if(LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_chosen == null) {
          return false;
        }
        // Block#: z]r4k3M;!jX8E/v%Ofx@
        if(LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_chosen == (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_form, 'options'))[index], 'id'))) {
          return true;
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.getChoiceNum = getChoiceNum;

      function getChoiceNum() {
        // Block#: W(5zoR4P]hIe;;[$m`*N
        if(LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_form == null) {
          return 0;
        }
        return(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_form, 'options')).length;
      }
      /**
       * Returns the selected choice.
       */
      this.getEQ5D5LRadioButtonsId = getEQ5D5LRadioButtonsId;

      function getEQ5D5LRadioButtonsId() {
        // Block#: IT;Yx4E@q.L)/0%bLn^N
        if(LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_chosen == null) {
          return null;
        }
        return LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_chosen;
      }
      /**
       * Returns the selected choice.
       */
      this.getEQ5D5LRadioButtonsValue = getEQ5D5LRadioButtonsValue;

      function getEQ5D5LRadioButtonsValue() {
        // Block#: =DQpUS!5.Bsi:iH/H,|A
        if(LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_chosen == null) {
          return null;
        }
        return LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_chosen;
      }
      /**
       * This function will show or hide the input from screen layout.
       */
      this.display = display;

      function display(visible) {
        return new Promise(function(resolve, reject) {
          // Block#: dq8@(Uf|R]WXAG8t!$J,
          if(visible) {
            // Block#: @#T]KSB}1ilGi6vn}e}S
            $('[obj-name="' + instance + '_EQ5D5LRBRBLV"]').show();
          } else {
            // Block#: %=:[fXs21+tt?}Ru4)@X
            $('[obj-name="' + instance + '_EQ5D5LRBRBLV"]').hide();
          }
        });
      }
      /**
       * Generates the choice list for radio buttons using field from api response.
       */
      this.setEQ5D5LRadioButtons = setEQ5D5LRadioButtons;

      function setEQ5D5LRadioButtons(field) {
        return new Promise(function(resolve, reject) {
          // Block#: G:5v5K((+6C1^^D#/3ul
          if(field != null) {
            // Block#: c!U{WhY:We*sa86@Gxd+
            if(LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_chosen != null) {
              // Block#: ea2W+v6,+{HI~sx0qtRW
              LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_chosen = null;
            }
            // Block#: z4r{x-mg/uwNvy;f3Of(
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'type'), "EQUAL", 'radio-buttons')) {
              // Block#: p~spO)y=pN+#n!Omq7[j
              LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_form = field;
              // Block#: V4%Of.N%PMWuZNF.D7d=
              com.fc.JavaScriptDistLib.Label.setProperty["Text"](instance + "_LEQ5D5L", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'name'))); // Block#: H/V/sqgMoh3XN#f9V-Jj
              if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(field, 'value')) {
                // Block#: 2@-HBS]W8oBi^`kt:EXh
                if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'value')) != null) {
                  // Block#: =h%9*,QnPO|=D;b[jenN
                  LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_chosen = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'value'));
                }
              }
              // Block#: LY%*1/0]Wp@pf~j$G@a|
              hideError().then(response => {;
              });
              // Block#: cDOYpi.Z5Lo*@[{cX}13
              com.fc.JavaScriptDistLib.ListView.saveTemplateCell(instance + '_EQ5D5LRBRBLV');
              com.fc.JavaScriptDistLib.ListView.removeAllCells(instance + '_EQ5D5LRBRBLV');
              on_listview_length_configured_EQ5D5LRBInput_EQ5D5LRBRBLV();
              // Block#: h3VcUUX2,h`pR7cS)te!
              $('[obj-name="' + instance + '_EQ5D5LRBRBLV"]').show();
            }
          }
        });
      }
      /**
       * Returns the selected choice.
       */
      this.hasEQ5D5LRadioButtonsValue = hasEQ5D5LRadioButtonsValue;

      function hasEQ5D5LRadioButtonsValue() {
        // Block#: uT@N)Ka}qdUAbibDTwB]
        if(LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_chosen != null) {
          return true;
        }
        return false;
      }
      /**
       * Returns the selected choice.
       */
      this.getEQ5D5LRadioButtonOptionName = getEQ5D5LRadioButtonOptionName;

      function getEQ5D5LRadioButtonOptionName() {
        // Block#: ACYLJUx.@]i]r1vKTd1r
        var index_end = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_form, 'options')).length - 1;
        var index_inc = 1;
        if(0 > index_end) {
          let index_inc = -index_inc;
        }
        for(index = 0; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
          // Block#: THQ}.?UFL54.UXCae]kG
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_form, 'options'))[index], 'id'), "EQUAL", LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_chosen)) {
            return com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_form, 'options'))[index], 'name');
          }
        }
        return '';
      }
      /**
       * This will hide error message.
       */
      this.hideError = hideError;

      function hideError() {
        return new Promise(function(resolve, reject) {
          // Block#: }N(6DKS#9;!@0+x`_p;#
          $('[obj-name="' + instance + '_ErrorMsg"]').hide();
        });
      }
      /**
       * This function will set error text given the provided
       * message. The error will show up right after the update.
       */
      this.setError = setError;

      function setError(message) {
        return new Promise(function(resolve, reject) {
          // Block#: 9!fwE1..,ln6b[1C9++v
          com.fc.JavaScriptDistLib.Label.setProperty["Text"](instance + "_ErrorMsg", (com.fc.JavaScriptDistLib.TextLib.convertToText(message))); // Block#: w|z*Kj/z-:7)qb6N.9Hp
          $('[obj-name="' + instance + '_ErrorMsg"]').show();
        });
      }
      /**
       * If input requires a value, it will check if user selected a choice or not.
       */
      this.isValid = isValid;

      function isValid() {
        // Block#: 27Xs)+-sake0^RKl?bn4
        if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_form, 'required')) && LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_chosen == null) {
          return false;
        }
        return true;
      }
      // Block#: *-1*q`=;3lMIUq(x,NI-
      function on_listview_cell_configured_EQ5D5LRBInput_EQ5D5LRBLVC(EQ5D5LRBInput_EQ5D5LRBLVC, number) {
        try {
          // Block#: ,hcxE;uS}_%#NH+dp[Z=
          com.fc.JavaScriptDistLib.Label.setProperty["Text"](instance + "_EQ5DRBText", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_form, 'options'))[number], 'name'))); // Block#: 79i3]n)?$;$IB`l$a+(X
          if(isSelected(number)) {
            // Block#: ~Yc$r6_[{uPJ{Sqf#~?}
            com.fc.JavaScriptDistLib.Image.setProperty["Image"](instance + "_EQ5DRBIcon", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.eq5d5l/click.snapp.user81.radiobuttonsuicomponent/buttonClicked.png")));
          } else {
            // Block#: y,*?Rb^m(1m*qDe+v5)=
            com.fc.JavaScriptDistLib.Image.setProperty["Image"](instance + "_EQ5DRBIcon", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.eq5d5l/button.png")));
          }
          // Block#: J5w,4.z~*ce{b#Os6xA_
          if(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_form, 'readOnly')) {
            // Block#: JiP.PT%Pl7799}RK%Uov
            com.fc.JavaScriptDistLib.ListView.setProperty["Alpha"](EQ5D5LRBInput_EQ5D5LRBLVC, 50);
          } else {
            // Block#: |.+UQkG;XK%##Z{duP0L
            com.fc.JavaScriptDistLib.ListView.setProperty["Alpha"](EQ5D5LRBInput_EQ5D5LRBLVC, 100);
          }
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      };
      com.fc.JavaScriptDistLib.ListView.setConfigCallback(instance + '_EQ5D5LRBLVC', on_listview_cell_configured_EQ5D5LRBInput_EQ5D5LRBLVC);
      // Block#: (U/IY;mnw@+LI-)RKeMG
      function on_listview_cell_clicked_EQ5D5LRBInput_EQ5D5LRBLVC(EQ5D5LRBInput_EQ5D5LRBLVC, number) {
        try {
          // Block#: CXG4lYA:qPMm8@sr]E*V
          if(!(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_form, 'readOnly'))) {
            // Block#: 8s0%[R(WDaZ54sI8VTg*
            LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_chosen = (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.radiobuttonsuicomponenteq5d5l[instance].singlechoice_form, 'options'))[number], 'id'));
            // Block#: ES/3qD5cnIf;ZuYHC$$0
            com.fc.JavaScriptDistLib.ListView.saveTemplateCell(instance + '_EQ5D5LRBRBLV');
            com.fc.JavaScriptDistLib.ListView.removeAllCells(instance + '_EQ5D5LRBRBLV');
            on_listview_length_configured_EQ5D5LRBInput_EQ5D5LRBRBLV();
            // Block#: AT*/2w#7yVc)iS,}pJO@
            hideError().then(response => {;
            });
          }
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      }
      com.fc.JavaScriptDistLib.ListView.setClickCallback(instance + '_EQ5D5LRBLVC', on_listview_cell_clicked_EQ5D5LRBInput_EQ5D5LRBLVC);
      // Block#: o34rL]Kq2N9/xW1L@Nm2
      function on_listview_length_configured_EQ5D5LRBInput_EQ5D5LRBRBLV() {
        try {
          com.fc.JavaScriptDistLib.ListView.configureCells(instance + '_EQ5D5LRBRBLV', getChoiceNum());
          $('[obj-name="' + instance + '_EQ5D5LRBRBLV"]').children().each(function(i) {
            if(i >= 0) {
              com.fc.JavaScriptDistLib.ListView.setContext($(this));
              com.fc.JavaScriptDistLib.ListView.executeConfigCallback(instance + '_EQ5D5LRBRBLV', $(this), i);
              com.fc.JavaScriptDistLib.ListView.executeConfigHeightCallback(instance + '_EQ5D5LRBRBLV', $(this), i);
              com.fc.JavaScriptDistLib.ListView.resetContext($(this));
            }
          });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      };
    };
    var radiobuttonsuicomponenteq5d5l = new RadioButtonsUIComponentEQ5D5L();
    var radiobuttonsuicomponenteq5d5l_EQ5D5LRBInput = new RadioButtonsUIComponentEQ5D5L_EQ5D5LRBInput("EQ5D5LRBInput");

    function VASUIComponentEQ5D5L() {
      lib_instance = "i2cnq5hwzy";
      LibVars.vasuicomponenteq5d5l = LibVars.vasuicomponenteq5d5l || {};
      LibVars.vasuicomponenteq5d5l.currentValueEQ5D5LVAS = null;
      LibVars.vasuicomponenteq5d5l.hasMeasurement = null;
      LibVars.vasuicomponenteq5d5l.EQ5D5LHeightTotal1 = null;
      LibVars.vasuicomponenteq5d5l._inputVASField = null;
      LibVars.vasuicomponenteq5d5l._currentVASValue = null;
      /**
       * Describe this function...
       */
      this.enableEQ5D5LVASOnTouchMove = enableEQ5D5LVASOnTouchMove;

      function enableEQ5D5LVASOnTouchMove() {
        return new Promise(function(resolve, reject) {
          // Block#: DWc8+E_akP/vBg2K;0P|
          try {
            $('[obj-name="_dummyVASInputEQ5D5LComponent_IEQ5D5LHMScale"]').off('touchstart mousedown', on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHMOVE);
            $('[obj-name="_dummyVASInputEQ5D5LComponent_IEQ5D5LHMScale"]').on('touchstart mousedown', on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHMOVE);
          } catch(err) {}
          // Block#: Ov`vI|2:^j`.j7u6ZyP(
          try {
            $('[obj-name="_dummyVASInputEQ5D5LComponent_IEQ5D5LHMScale"]').off('touchstart mousedown', on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHSTART);
            $('[obj-name="_dummyVASInputEQ5D5LComponent_IEQ5D5LHMScale"]').on('touchstart mousedown', on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHSTART);
          } catch(err) {}
          // Block#: b_C9q:bq1!pw)y_^{qXf
          try {
            $('[obj-name="_dummyVASInputEQ5D5LComponent_IEQ5D5LHMScale"]').off('touchend mouseup', on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHEND);
            $('[obj-name="_dummyVASInputEQ5D5LComponent_IEQ5D5LHMScale"]').on('touchend mouseup', on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHEND);
          } catch(err) {}
          // Block#: 0kNpY:QtO+;t3TsP|vAA
          try {
            $('[obj-name="_dummyVASInputEQ5D5LComponent_IEQ5D5LHMDot"]').off('touchstart mousedown', on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMDot_TOUCHMOVE);
            $('[obj-name="_dummyVASInputEQ5D5LComponent_IEQ5D5LHMDot"]').on('touchstart mousedown', on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMDot_TOUCHMOVE);
          } catch(err) {}
        });
      }
      /**
       * Describe this function...
       */
      this.setUserMeasurement = setUserMeasurement;

      function setUserMeasurement(y) {
        return new Promise(function(resolve, reject) {
          // Block#: OF+*N@yk`_960v2G[jtV
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "GTE", com.fc.JavaScriptDistLib.Label.getProperty["y"]("VASInputEQ5D5LComponent_LEQ5D5LHM100") + com.fc.JavaScriptDistLib.Container.getProperty["y"]("VASInputEQ5D5LComponent")) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "LTE", com.fc.JavaScriptDistLib.Label.getProperty["y"]("VASInputEQ5D5LComponent_LEQ5D5LHM0") + com.fc.JavaScriptDistLib.Container.getProperty["y"]("VASInputEQ5D5LComponent"))
          ) {
            // Block#: Xq2gnkxDMs283:N9AVEd
            LibVars.vasuicomponenteq5d5l.currentValueEQ5D5LVAS = Math.round((y - (com.fc.JavaScriptDistLib.Label.getProperty["y"]("VASInputEQ5D5LComponent_LEQ5D5LHM100") + com.fc.JavaScriptDistLib.Container.getProperty["y"]("VASInputEQ5D5LComponent"))) / (LibVars.vasuicomponenteq5d5l.EQ5D5LHeightTotal1 / 100) - 100);
          }
          // Block#: D$;,eI$Q$%K}q(^`21$e
          LibVars.vasuicomponenteq5d5l.currentValueEQ5D5LVAS = LibVars.vasuicomponenteq5d5l.currentValueEQ5D5LVAS * -1;
          // Block#: Dy;8^chu%l$tV_vt31%h
          LibVars.vasuicomponenteq5d5l.hasMeasurement = true;
        });
      }
      /**
       * Describe this function...
       */
      this.moveMarker = moveMarker;

      function moveMarker(x, y) {
        return new Promise(function(resolve, reject) {
          // Block#: u@y0PP)`!G./[?/KyN0r
          $('[obj-name="_dummyVASInputEQ5D5LComponent_CEQ5D5LScaleHMMarker"]').show(); // Block#: Lz0Y_U}6]I;y]H+q[F!(
          $('[obj-name="_dummyVASInputEQ5D5LComponent_IEQ5D5LHMDot"]').show(); // Block#: ,;6y]Le|adGDMEpWR_9-
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "GTE", com.fc.JavaScriptDistLib.Label.getProperty["y"]("VASInputEQ5D5LComponent_LEQ5D5LHM100") + com.fc.JavaScriptDistLib.Container.getProperty["y"]("VASInputEQ5D5LComponent")) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "LTE", com.fc.JavaScriptDistLib.Label.getProperty["y"]("VASInputEQ5D5LComponent_LEQ5D5LHM0") + com.fc.JavaScriptDistLib.Container.getProperty["y"]("VASInputEQ5D5LComponent"))
          ) {
            // Block#: )v?DA`W`$+B,a$MOxPv:
            com.fc.JavaScriptDistLib.Container.setProperty["y"]("VASInputEQ5D5LComponent_CEQ5D5LScaleHMMarker", ((y - com.fc.JavaScriptDistLib.Container.getProperty["y"]("VASInputEQ5D5LComponent")) - 14)); // Block#: LkcR-N,V+ttTW4%bqaHy
            com.fc.JavaScriptDistLib.Image.setProperty["y"]("VASInputEQ5D5LComponent_IEQ5D5LHMDot", ((y - com.fc.JavaScriptDistLib.Container.getProperty["y"]("VASInputEQ5D5LComponent")) - 3)); // Block#: ;^yneVdCx^Y[zTIsmJgN
            setUserMeasurement(y).then(response => {;
            });
          } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "LTE", com.fc.JavaScriptDistLib.Label.getProperty["y"]("VASInputEQ5D5LComponent_LEQ5D5LHM100") + com.fc.JavaScriptDistLib.Container.getProperty["y"]("VASInputEQ5D5LComponent"))) {
            // Block#: $4OFFhBh@0~XX$PV++N3
            com.fc.JavaScriptDistLib.Container.setProperty["y"]("VASInputEQ5D5LComponent_CEQ5D5LScaleHMMarker", (com.fc.JavaScriptDistLib.Label.getProperty["y"]("VASInputEQ5D5LComponent_LEQ5D5LHM100") - 14)); // Block#: ={K7_c@#sn2niV8m62!p
            com.fc.JavaScriptDistLib.Image.setProperty["y"]("VASInputEQ5D5LComponent_IEQ5D5LHMDot", (com.fc.JavaScriptDistLib.Label.getProperty["y"]("VASInputEQ5D5LComponent_LEQ5D5LHM100") - 2)); // Block#: 8Jzw0#M`c0+e]Y$Bf~+5
            LibVars.vasuicomponenteq5d5l.currentValueEQ5D5LVAS = (com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("VASInputEQ5D5LComponent_LEQ5D5LHM100")));
          } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "GTE", com.fc.JavaScriptDistLib.Label.getProperty["y"]("VASInputEQ5D5LComponent_LEQ5D5LHM0") + com.fc.JavaScriptDistLib.Container.getProperty["y"]("VASInputEQ5D5LComponent"))) {
            // Block#: |@H{#N:oY]aQv`RP|U[8
            com.fc.JavaScriptDistLib.Container.setProperty["y"]("VASInputEQ5D5LComponent_CEQ5D5LScaleHMMarker", (com.fc.JavaScriptDistLib.Label.getProperty["y"]("VASInputEQ5D5LComponent_LEQ5D5LHM0") - 14)); // Block#: 23(2~jtYt@O1hy`01wV^
            com.fc.JavaScriptDistLib.Image.setProperty["y"]("VASInputEQ5D5LComponent_IEQ5D5LHMDot", (com.fc.JavaScriptDistLib.Label.getProperty["y"]("VASInputEQ5D5LComponent_LEQ5D5LHM0") - 3)); // Block#: VeM5rd1z9TQDY]`;#{?J
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("VASInputEQ5D5LComponent_LEQ5D5LScaleValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.vasuicomponenteq5d5l.currentValueEQ5D5LVAS))); // Block#: ^V=@wf,muhE@0I@)c$f6
            LibVars.vasuicomponenteq5d5l.currentValueEQ5D5LVAS = (com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("VASInputEQ5D5LComponent_LEQ5D5LHM0")));
          }
          // Block#: |a|8xu{.$!?G(w*%)M4U
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("VASInputEQ5D5LComponent_LEQ5D5LScaleValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.vasuicomponenteq5d5l.currentValueEQ5D5LVAS))); // Block#: -H7h[[hgv.Y*pRF1f!~#
          handleSettingVASValue().then(response => {;
          });
        });
      }
      /**
       * Describe this function...
       */
      this.handleSettingVASValue = handleSettingVASValue;

      function handleSettingVASValue() {
        return new Promise(function(resolve, reject) {
          com.fc.JavaScriptDistLib.EventListeners.invoke("handleSettingVASValue", "i2cnq5hwzy", []);
        });
      }
      /**
       * To set and show the Error message of the VAS object.
       */
      this.setError = setError;

      function setError(message) {
        return new Promise(function(resolve, reject) {
          // Block#: $$XYaOm}dubcIGza-q:d
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("VASInputEQ5D5LComponent_LEQ5D5LVASErrorMsg", (com.fc.JavaScriptDistLib.TextLib.convertToText(message))); // Block#: #E+}u?+}:HmLcj[^]9fT
          $('[obj-name="_dummyVASInputEQ5D5LComponent_LEQ5D5LVASErrorMsg"]').show();
        });
      }
      /**
       * Describe this function...
       */
      this.onVASUIComponentEQ5D5LInit = onVASUIComponentEQ5D5LInit;

      function onVASUIComponentEQ5D5LInit() {
        return new Promise(function(resolve, reject) {
          // Block#: L9{R:(r*{:F{#f|=+WVe
          LibVars.vasuicomponenteq5d5l.EQ5D5LHeightTotal1 = com.fc.JavaScriptDistLib.Label.getProperty["y"]("VASInputEQ5D5LComponent_LEQ5D5LHM0") - com.fc.JavaScriptDistLib.Label.getProperty["y"]("VASInputEQ5D5LComponent_LEQ5D5LHM100");
          // Block#: 1Wa~2L)6*fp]/)76Kia6
          LibVars.vasuicomponenteq5d5l.currentValueEQ5D5LVAS = null;
          // Block#: .{:X7@l%GBUi]Pz;TjWN
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("VASInputEQ5D5LComponent_LEQ5D5LScaleValue", ''); // Block#: vZz7+_aT{vFH2O%fGk+D
          $('[obj-name="_dummyVASInputEQ5D5LComponent_IEQ5D5LHMDot"]').hide(); // Block#: KRyrsgqdZ6B$qZ.B3_Q6
          $('[obj-name="_dummyVASInputEQ5D5LComponent_CEQ5D5LScaleHMMarker"]').hide(); // Block#: s,pM0FSG@DDx4TqRXW]N
          $('[obj-name="_dummyVASInputEQ5D5LComponent_LEQ5D5LVASErrorMsg"]').hide(); // Block#: IOiTfCVq=oc3te+(oY0*
          enableEQ5D5LVASOnTouchMove().then(response => {;
          });
        });
      }
      /**
       * To hide Error label.
       */
      this.hideError = hideError;

      function hideError() {
        return new Promise(function(resolve, reject) {
          // Block#: BxlU.L])l[JK_.y|mfKn
          $('[obj-name="_dummyVASInputEQ5D5LComponent_LEQ5D5LVASErrorMsg"]').hide();
        });
      }
      /**
       * Describe this function...
       */
      this.showVASUIComponentEQ5D5L = showVASUIComponentEQ5D5L;

      function showVASUIComponentEQ5D5L() {
        return new Promise(function(resolve, reject) {
          // Block#: 7$$Mw8QAS_Ogl,zkYUG?
          if(!($('[obj-name="_dummyVASInputEQ5D5LComponent"]').is(':visible'))) {
            // Block#: 37$oj0Vws-T[.zVn-R|Z
            $('[obj-name="_dummyVASInputEQ5D5LComponent"]').show();
          }
        });
      }
      /**
       * Describe this function...
       */
      this.hasEQ5D5LVasValue = hasEQ5D5LVasValue;

      function hasEQ5D5LVasValue() {
        // Block#: #n^T[2w1oiJVkN~ec2QQ
        if(!(LibVars.vasuicomponenteq5d5l.currentValueEQ5D5LVAS == null)) {
          return true;
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.hideVASUIComponentEQ5D5L = hideVASUIComponentEQ5D5L;

      function hideVASUIComponentEQ5D5L() {
        return new Promise(function(resolve, reject) {
          // Block#: GD9zt?m~?aV^.G4_x$Jx
          if($('[obj-name="_dummyVASInputEQ5D5LComponent"]').is(':visible')) {
            // Block#: J,{^BpRW?uvR8l;p8iDJ
            $('[obj-name="_dummyVASInputEQ5D5LComponent"]').hide();
          }
        });
      }
      /**
       * Describe this function...
       */
      this.getEQ5D5LVASValue = getEQ5D5LVASValue;

      function getEQ5D5LVASValue() {
        // Block#: K[n!h$K0m{G0^[JG$2:L
        if(hasEQ5D5LVasValue()) {
          return LibVars.vasuicomponenteq5d5l.currentValueEQ5D5LVAS;
        }
        return null;
      }
      /**
       * Returns false if input is set as required
       * and value does not exists, true otherwise.
       */
      this.isValid = isValid;

      function isValid() {
        // Block#: lrK=J4jx0t-ohZ54,(sX
        if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.vasuicomponenteq5d5l._inputVASField, 'required')) && LibVars.vasuicomponenteq5d5l._currentVASValue == null) {
          return false;
        }
        return true;
      }
      // Block#: 10)*)k@%PU9=jpjFBwPd
      function on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHSTART(e) {
        try {
          var currentScreen = $('.fc.Screen:visible');
          var ose = currentScreen.offset();
          var isTouch = e.type === 'touchstart' || e.type === 'touchend',
            x = Math.round(isTouch ? e.targetTouches[0].clientX : e.clientX - ose.left),
            y = isTouch ? e.targetTouches[0].clientY : e.clientY - ose.top;
          // Block#: 7}`hsm}BZazYP#37}Xu}
          moveMarker(x, y).then(response => {;
          });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        };
      };
      // Block#: 3IwQ^SkvP}ts-pP:[OWX
      function on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHEND(e) {
        try {
          var currentScreen = $('.fc.Screen:visible');
          var ose = currentScreen.offset();
          var isTouch = e.type === 'touchstart' || e.type === 'touchend',
            x = Math.round(isTouch ? e.targetTouches[0].clientX : e.clientX - ose.left),
            y = isTouch ? e.targetTouches[0].clientY : e.clientY - ose.top;
          // Block#: t2]f/vI{%0|;[iOmjcNp
          moveMarker(x, y).then(response => {;
          });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        };
      };
      // Block#: pv{$zR]FkR-Hv2uuSwW`
      function on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHMOVE(e) {
        try {
          var currentScreen = $('.fc.Screen:visible');
          currentScreen.on('touchmove mousemove', function(touch) {
            var ose = currentScreen.offset();
            var isTouch = touch.type === 'touchmove',
              x = Math.round(isTouch ? touch.targetTouches[0].clientX : touch.clientX - ose.left),
              y = isTouch ? touch.targetTouches[0].clientY : touch.clientY - ose.top;
            // Block#: U%o$7-NOAdv;~p3DJd;Y
            moveMarker(x, y).then(response => {;
            });;
            touch.stopPropagation();
          });
          currentScreen.on('mouseup touchend mouseleave', function(release) {
            release.stopPropagation();
            currentScreen.off('mousemove touchmove mouseup touchend');
          });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        };
      };
      // Block#: KKWTqa_[w^-*qe1)u,fS
      function on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMDot_TOUCHMOVE(e) {
        try {
          var currentScreen = $('.fc.Screen:visible');
          currentScreen.on('touchmove mousemove', function(touch) {
            var ose = currentScreen.offset();
            var isTouch = touch.type === 'touchmove',
              x = Math.round(isTouch ? touch.targetTouches[0].clientX : touch.clientX - ose.left),
              y = isTouch ? touch.targetTouches[0].clientY : touch.clientY - ose.top;
            // Block#: 3TrB]A):RSHij}M7lPe[
            moveMarker(x, y).then(response => {;
            });;
            touch.stopPropagation();
          });
          currentScreen.on('mouseup touchend mouseleave', function(release) {
            release.stopPropagation();
            currentScreen.off('mousemove touchmove mouseup touchend');
          });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        };
      };
    };
    var vasuicomponenteq5d5l = new VASUIComponentEQ5D5L();

    function VASUIComponentEQ5D5L_VASInputEQ5D5L(instance) {
      lib_instance = "i2cnq5hwzy" + instance;
      LibVars.vasuicomponenteq5d5l[instance] = LibVars.vasuicomponenteq5d5l[instance] || {};
      LibVars.vasuicomponenteq5d5l[instance].currentValueEQ5D5LVAS = null;
      LibVars.vasuicomponenteq5d5l[instance].hasMeasurement = null;
      LibVars.vasuicomponenteq5d5l[instance].EQ5D5LHeightTotal1 = null;
      LibVars.vasuicomponenteq5d5l[instance]._inputVASField = null;
      LibVars.vasuicomponenteq5d5l[instance]._currentVASValue = null;
      /**
       * Describe this function...
       */
      this.enableEQ5D5LVASOnTouchMove = enableEQ5D5LVASOnTouchMove;

      function enableEQ5D5LVASOnTouchMove() {
        return new Promise(function(resolve, reject) {
          // Block#: DWc8+E_akP/vBg2K;0P|
          try {
            $('[obj-name="' + instance + '_IEQ5D5LHMScale"]').off('touchstart mousedown', on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHMOVE);
            $('[obj-name="' + instance + '_IEQ5D5LHMScale"]').on('touchstart mousedown', on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHMOVE);
          } catch(err) {}
          // Block#: Ov`vI|2:^j`.j7u6ZyP(
          try {
            $('[obj-name="' + instance + '_IEQ5D5LHMScale"]').off('touchstart mousedown', on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHSTART);
            $('[obj-name="' + instance + '_IEQ5D5LHMScale"]').on('touchstart mousedown', on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHSTART);
          } catch(err) {}
          // Block#: b_C9q:bq1!pw)y_^{qXf
          try {
            $('[obj-name="' + instance + '_IEQ5D5LHMScale"]').off('touchend mouseup', on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHEND);
            $('[obj-name="' + instance + '_IEQ5D5LHMScale"]').on('touchend mouseup', on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHEND);
          } catch(err) {}
          // Block#: 0kNpY:QtO+;t3TsP|vAA
          try {
            $('[obj-name="' + instance + '_IEQ5D5LHMDot"]').off('touchstart mousedown', on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMDot_TOUCHMOVE);
            $('[obj-name="' + instance + '_IEQ5D5LHMDot"]').on('touchstart mousedown', on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMDot_TOUCHMOVE);
          } catch(err) {}
        });
      }
      /**
       * Describe this function...
       */
      this.setUserMeasurement = setUserMeasurement;

      function setUserMeasurement(y) {
        return new Promise(function(resolve, reject) {
          // Block#: OF+*N@yk`_960v2G[jtV
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "GTE", com.fc.JavaScriptDistLib.Label.getProperty["y"](instance + "_LEQ5D5LHM100") + com.fc.JavaScriptDistLib.Container.getProperty["y"](instance)) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "LTE", com.fc.JavaScriptDistLib.Label.getProperty["y"](instance + "_LEQ5D5LHM0") + com.fc.JavaScriptDistLib.Container.getProperty["y"](instance))
          ) {
            // Block#: Xq2gnkxDMs283:N9AVEd
            LibVars.vasuicomponenteq5d5l[instance].currentValueEQ5D5LVAS = Math.round((y - (com.fc.JavaScriptDistLib.Label.getProperty["y"](instance + "_LEQ5D5LHM100") + com.fc.JavaScriptDistLib.Container.getProperty["y"](instance))) / (LibVars.vasuicomponenteq5d5l[instance].EQ5D5LHeightTotal1 / 100) - 100);
          }
          // Block#: D$;,eI$Q$%K}q(^`21$e
          LibVars.vasuicomponenteq5d5l[instance].currentValueEQ5D5LVAS = LibVars.vasuicomponenteq5d5l[instance].currentValueEQ5D5LVAS * -1;
          // Block#: Dy;8^chu%l$tV_vt31%h
          LibVars.vasuicomponenteq5d5l[instance].hasMeasurement = true;
        });
      }
      /**
       * Describe this function...
       */
      this.moveMarker = moveMarker;

      function moveMarker(x, y) {
        return new Promise(function(resolve, reject) {
          // Block#: u@y0PP)`!G./[?/KyN0r
          $('[obj-name="' + instance + '_CEQ5D5LScaleHMMarker"]').show(); // Block#: Lz0Y_U}6]I;y]H+q[F!(
          $('[obj-name="' + instance + '_IEQ5D5LHMDot"]').show(); // Block#: ,;6y]Le|adGDMEpWR_9-
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "GTE", com.fc.JavaScriptDistLib.Label.getProperty["y"](instance + "_LEQ5D5LHM100") + com.fc.JavaScriptDistLib.Container.getProperty["y"](instance)) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "LTE", com.fc.JavaScriptDistLib.Label.getProperty["y"](instance + "_LEQ5D5LHM0") + com.fc.JavaScriptDistLib.Container.getProperty["y"](instance))
          ) {
            // Block#: )v?DA`W`$+B,a$MOxPv:
            com.fc.JavaScriptDistLib.Container.setProperty["y"](instance + "_CEQ5D5LScaleHMMarker", ((y - com.fc.JavaScriptDistLib.Container.getProperty["y"](instance)) - 14)); // Block#: LkcR-N,V+ttTW4%bqaHy
            com.fc.JavaScriptDistLib.Image.setProperty["y"](instance + "_IEQ5D5LHMDot", ((y - com.fc.JavaScriptDistLib.Container.getProperty["y"](instance)) - 3)); // Block#: ;^yneVdCx^Y[zTIsmJgN
            setUserMeasurement(y).then(response => {;
            });
          } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "LTE", com.fc.JavaScriptDistLib.Label.getProperty["y"](instance + "_LEQ5D5LHM100") + com.fc.JavaScriptDistLib.Container.getProperty["y"](instance))) {
            // Block#: $4OFFhBh@0~XX$PV++N3
            com.fc.JavaScriptDistLib.Container.setProperty["y"](instance + "_CEQ5D5LScaleHMMarker", (com.fc.JavaScriptDistLib.Label.getProperty["y"](instance + "_LEQ5D5LHM100") - 14)); // Block#: ={K7_c@#sn2niV8m62!p
            com.fc.JavaScriptDistLib.Image.setProperty["y"](instance + "_IEQ5D5LHMDot", (com.fc.JavaScriptDistLib.Label.getProperty["y"](instance + "_LEQ5D5LHM100") - 2)); // Block#: 8Jzw0#M`c0+e]Y$Bf~+5
            LibVars.vasuicomponenteq5d5l[instance].currentValueEQ5D5LVAS = (com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Label.getProperty["Text"](instance + "_LEQ5D5LHM100")));
          } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "GTE", com.fc.JavaScriptDistLib.Label.getProperty["y"](instance + "_LEQ5D5LHM0") + com.fc.JavaScriptDistLib.Container.getProperty["y"](instance))) {
            // Block#: |@H{#N:oY]aQv`RP|U[8
            com.fc.JavaScriptDistLib.Container.setProperty["y"](instance + "_CEQ5D5LScaleHMMarker", (com.fc.JavaScriptDistLib.Label.getProperty["y"](instance + "_LEQ5D5LHM0") - 14)); // Block#: 23(2~jtYt@O1hy`01wV^
            com.fc.JavaScriptDistLib.Image.setProperty["y"](instance + "_IEQ5D5LHMDot", (com.fc.JavaScriptDistLib.Label.getProperty["y"](instance + "_LEQ5D5LHM0") - 3)); // Block#: VeM5rd1z9TQDY]`;#{?J
            com.fc.JavaScriptDistLib.Label.setProperty["Text"](instance + "_LEQ5D5LScaleValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.vasuicomponenteq5d5l[instance].currentValueEQ5D5LVAS))); // Block#: ^V=@wf,muhE@0I@)c$f6
            LibVars.vasuicomponenteq5d5l[instance].currentValueEQ5D5LVAS = (com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Label.getProperty["Text"](instance + "_LEQ5D5LHM0")));
          }
          // Block#: |a|8xu{.$!?G(w*%)M4U
          com.fc.JavaScriptDistLib.Label.setProperty["Text"](instance + "_LEQ5D5LScaleValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.vasuicomponenteq5d5l[instance].currentValueEQ5D5LVAS))); // Block#: -H7h[[hgv.Y*pRF1f!~#
          handleSettingVASValue().then(response => {;
          });
        });
      }
      /**
       * Describe this function...
       */
      this.handleSettingVASValue = handleSettingVASValue;

      function handleSettingVASValue() {
        return new Promise(function(resolve, reject) {
          com.fc.JavaScriptDistLib.EventListeners.invoke("handleSettingVASValue", "i2cnq5hwzy" + instance, []);
        });
      }
      /**
       * To set and show the Error message of the VAS object.
       */
      this.setError = setError;

      function setError(message) {
        return new Promise(function(resolve, reject) {
          // Block#: $$XYaOm}dubcIGza-q:d
          com.fc.JavaScriptDistLib.Label.setProperty["Text"](instance + "_LEQ5D5LVASErrorMsg", (com.fc.JavaScriptDistLib.TextLib.convertToText(message))); // Block#: #E+}u?+}:HmLcj[^]9fT
          $('[obj-name="' + instance + '_LEQ5D5LVASErrorMsg"]').show();
        });
      }
      /**
       * Describe this function...
       */
      this.onVASUIComponentEQ5D5LInit = onVASUIComponentEQ5D5LInit;

      function onVASUIComponentEQ5D5LInit() {
        return new Promise(function(resolve, reject) {
          // Block#: L9{R:(r*{:F{#f|=+WVe
          LibVars.vasuicomponenteq5d5l[instance].EQ5D5LHeightTotal1 = com.fc.JavaScriptDistLib.Label.getProperty["y"](instance + "_LEQ5D5LHM0") - com.fc.JavaScriptDistLib.Label.getProperty["y"](instance + "_LEQ5D5LHM100");
          // Block#: 1Wa~2L)6*fp]/)76Kia6
          LibVars.vasuicomponenteq5d5l[instance].currentValueEQ5D5LVAS = null;
          // Block#: .{:X7@l%GBUi]Pz;TjWN
          com.fc.JavaScriptDistLib.Label.setProperty["Text"](instance + "_LEQ5D5LScaleValue", ''); // Block#: vZz7+_aT{vFH2O%fGk+D
          $('[obj-name="' + instance + '_IEQ5D5LHMDot"]').hide(); // Block#: KRyrsgqdZ6B$qZ.B3_Q6
          $('[obj-name="' + instance + '_CEQ5D5LScaleHMMarker"]').hide(); // Block#: s,pM0FSG@DDx4TqRXW]N
          $('[obj-name="' + instance + '_LEQ5D5LVASErrorMsg"]').hide(); // Block#: IOiTfCVq=oc3te+(oY0*
          enableEQ5D5LVASOnTouchMove().then(response => {;
          });
        });
      }
      /**
       * To hide Error label.
       */
      this.hideError = hideError;

      function hideError() {
        return new Promise(function(resolve, reject) {
          // Block#: BxlU.L])l[JK_.y|mfKn
          $('[obj-name="' + instance + '_LEQ5D5LVASErrorMsg"]').hide();
        });
      }
      /**
       * Describe this function...
       */
      this.showVASUIComponentEQ5D5L = showVASUIComponentEQ5D5L;

      function showVASUIComponentEQ5D5L() {
        return new Promise(function(resolve, reject) {
          // Block#: 7$$Mw8QAS_Ogl,zkYUG?
          if(!($('[obj-name="' + instance + '"]').is(':visible'))) {
            // Block#: 37$oj0Vws-T[.zVn-R|Z
            $('[obj-name="' + instance + '"]').show();
          }
        });
      }
      /**
       * Describe this function...
       */
      this.hasEQ5D5LVasValue = hasEQ5D5LVasValue;

      function hasEQ5D5LVasValue() {
        // Block#: #n^T[2w1oiJVkN~ec2QQ
        if(!(LibVars.vasuicomponenteq5d5l[instance].currentValueEQ5D5LVAS == null)) {
          return true;
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.hideVASUIComponentEQ5D5L = hideVASUIComponentEQ5D5L;

      function hideVASUIComponentEQ5D5L() {
        return new Promise(function(resolve, reject) {
          // Block#: GD9zt?m~?aV^.G4_x$Jx
          if($('[obj-name="' + instance + '"]').is(':visible')) {
            // Block#: J,{^BpRW?uvR8l;p8iDJ
            $('[obj-name="' + instance + '"]').hide();
          }
        });
      }
      /**
       * Describe this function...
       */
      this.getEQ5D5LVASValue = getEQ5D5LVASValue;

      function getEQ5D5LVASValue() {
        // Block#: K[n!h$K0m{G0^[JG$2:L
        if(hasEQ5D5LVasValue()) {
          return LibVars.vasuicomponenteq5d5l[instance].currentValueEQ5D5LVAS;
        }
        return null;
      }
      /**
       * Returns false if input is set as required
       * and value does not exists, true otherwise.
       */
      this.isValid = isValid;

      function isValid() {
        // Block#: lrK=J4jx0t-ohZ54,(sX
        if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.vasuicomponenteq5d5l[instance]._inputVASField, 'required')) && LibVars.vasuicomponenteq5d5l[instance]._currentVASValue == null) {
          return false;
        }
        return true;
      }
      // Block#: 10)*)k@%PU9=jpjFBwPd
      function on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHSTART(e) {
        try {
          var currentScreen = $('.fc.Screen:visible');
          var ose = currentScreen.offset();
          var isTouch = e.type === 'touchstart' || e.type === 'touchend',
            x = Math.round(isTouch ? e.targetTouches[0].clientX : e.clientX - ose.left),
            y = isTouch ? e.targetTouches[0].clientY : e.clientY - ose.top;
          // Block#: 7}`hsm}BZazYP#37}Xu}
          moveMarker(x, y).then(response => {;
          });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        };
      };
      // Block#: 3IwQ^SkvP}ts-pP:[OWX
      function on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHEND(e) {
        try {
          var currentScreen = $('.fc.Screen:visible');
          var ose = currentScreen.offset();
          var isTouch = e.type === 'touchstart' || e.type === 'touchend',
            x = Math.round(isTouch ? e.targetTouches[0].clientX : e.clientX - ose.left),
            y = isTouch ? e.targetTouches[0].clientY : e.clientY - ose.top;
          // Block#: t2]f/vI{%0|;[iOmjcNp
          moveMarker(x, y).then(response => {;
          });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        };
      };
      // Block#: pv{$zR]FkR-Hv2uuSwW`
      function on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMScale_TOUCHMOVE(e) {
        try {
          var currentScreen = $('.fc.Screen:visible');
          currentScreen.on('touchmove mousemove', function(touch) {
            var ose = currentScreen.offset();
            var isTouch = touch.type === 'touchmove',
              x = Math.round(isTouch ? touch.targetTouches[0].clientX : touch.clientX - ose.left),
              y = isTouch ? touch.targetTouches[0].clientY : touch.clientY - ose.top;
            // Block#: U%o$7-NOAdv;~p3DJd;Y
            moveMarker(x, y).then(response => {;
            });;
            touch.stopPropagation();
          });
          currentScreen.on('mouseup touchend mouseleave', function(release) {
            release.stopPropagation();
            currentScreen.off('mousemove touchmove mouseup touchend');
          });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        };
      };
      // Block#: KKWTqa_[w^-*qe1)u,fS
      function on_Image_VASInputEQ5D5LComponent_IEQ5D5LHMDot_TOUCHMOVE(e) {
        try {
          var currentScreen = $('.fc.Screen:visible');
          currentScreen.on('touchmove mousemove', function(touch) {
            var ose = currentScreen.offset();
            var isTouch = touch.type === 'touchmove',
              x = Math.round(isTouch ? touch.targetTouches[0].clientX : touch.clientX - ose.left),
              y = isTouch ? touch.targetTouches[0].clientY : touch.clientY - ose.top;
            // Block#: 3TrB]A):RSHij}M7lPe[
            moveMarker(x, y).then(response => {;
            });;
            touch.stopPropagation();
          });
          currentScreen.on('mouseup touchend mouseleave', function(release) {
            release.stopPropagation();
            currentScreen.off('mousemove touchmove mouseup touchend');
          });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        };
      };
    };
    var vasuicomponenteq5d5l = new VASUIComponentEQ5D5L();
    var vasuicomponenteq5d5l_VASInputEQ5D5LComponent = new VASUIComponentEQ5D5L_VASInputEQ5D5L("VASInputEQ5D5LComponent");

    function TranslatorLib() {
      lib_instance = "p1m38oqzly";
      LibVars.translatorlib = LibVars.translatorlib || {};
      LibVars.translatorlib._usedLang = null;
      LibVars.translatorlib._translations = null;
      LibVars.translatorlib.translatedRadioButton = null;
      LibVars.translatorlib.temp = null;
      LibVars.translatorlib.translationsLocal = null;
      /**
       * Describe this function...
       */
      this.getTranslations = getTranslations;

      function getTranslations() {
        return new Promise(function(resolve, reject) {
          // Block#: el5)!YY8WBY/eOQXO~z0
          LibVars.translatorlib._usedLang = (com.fc.JavaScriptDistLib.Storage.getValue('language'));
          // Block#: _MRX5sw]C0c?ZphS~u9T
          com.fc.JavaScriptDistLib.SnapClinical.fetch('/snap-api/translations', "GET", JSON.stringify(),
            function(data) {
              // Block#: bZvSgQKSXBqciT(~WnRV
              LibVars.translatorlib._translations = data;
              // Block#: h]yLRt)^qBHM-6f]#g?I
              resolve({
                name: "then",
                data: data
              });
            },
            function(error) {
              // Block#: ;UnQ)4_}wxtCO5R7ecQl
              resolve({
                name: "catch",
                data: error
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.getLanguageAndTranslations = getLanguageAndTranslations;

      function getLanguageAndTranslations() {
        return new Promise(function(resolve, reject) {
          // Block#: %;BG-yAP,KcCWg@A.uY-
          getProfileLanguage().then(response => {;
            if(response.name === "success") {
              // Block#: yN[7JxEbKe?K}Z^w[mcd
              getTranslations().then(response => {;
                if(response.name === "then") {
                  // Block#: 2nE0Dl;m+p,1JLWLK$cQ
                  com.fc.JavaScriptDistLib.Debug.printLog(response.data);
                  // Block#: uKY:4Cxq/dn+S53Fh8?e
                  resolve({
                    name: "then",
                    data: response.data
                  });
                }
                if(response.name === "catch") {
                  // Block#: l]uczOQ{3dU,)DEi{Tx(
                  resolve({
                    name: "then",
                    data: response.data
                  });
                }
              });
            }
            if(response.name === "failure") {
              // Block#: =B5;fO_B@YS3dg;[HNGV
              resolve({
                name: "then",
                data: response.data
              });
            }
          });
        });
      }
      /**
       * Describe this function...
       */
      this.translate = translate;

      function translate(key) {
        // Block#: ]lDH^cw:}efN6e5`-?S^
        if(key == null || com.fc.JavaScriptDistLib.TextLib.textComparison(LibVars.translatorlib._usedLang, "EQUAL", 'en-US') ||
          (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.translatorlib._translations, key), LibVars.translatorlib._usedLang)) == null) {
          return key;
        }
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.translatorlib._translations, key), LibVars.translatorlib._usedLang);
      }
      /**
       * Describe this function...
       */
      this.getStoredTranslations = getStoredTranslations;

      function getStoredTranslations() {
        // Block#: hZ~6ZY#M`e:pu^w(r@Y)
        if(LibVars.translatorlib._translations == null) {
          return com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        }
        return LibVars.translatorlib._translations;
      }
      /**
       * Describe this function...
       */
      this.translateRadioButtons = translateRadioButtons;

      function translateRadioButtons(radioButtons) {
        // Block#: ErH`bL-_RIz`0HeXJJ_7
        LibVars.translatorlib.translatedRadioButton = radioButtons;
        // Block#: 2D-bF-N[+2YALKpvc4Z~
        com.fc.JavaScriptDistLib.Debug.printLog(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.translatorlib.translatedRadioButton, 'name')));
        // Block#: w3i1u]Ki:AWgA0/]+ww=
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.translatorlib.translatedRadioButton, 'name', translate((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.translatorlib.translatedRadioButton, 'name'))));
        // Block#: 2y}0k$Hd-odmys+%]Z5w
        var item_list = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.translatorlib.translatedRadioButton, 'options'));
        for(var item_index in item_list) {
          let item = item_list[item_index];
          // Block#: ,x!y8ci@dnh3{0(F:62D
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(item, 'name', translate((com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name')))));
        }
        return LibVars.translatorlib.translatedRadioButton;
      }
      /**
       * Describe this function...
       */
      this.translateCheckboxes = translateCheckboxes;

      function translateCheckboxes(fields) {
        // Block#: .8U?u`:ZgZ=1ATK.?EPL
        if(fields == null) {
          return fields;
        }
        // Block#: C.?:k%UsOaB`F;}TBu)R
        for(var field_index in fields) {
          let field = fields[field_index];
          // Block#: O$V!vpghlZ0c*.}==23_
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(field, 'name', translate((com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'name'))));
        }
        return fields;
      }
      /**
       * Describe this function...
       */
      this.translateFieldName = translateFieldName;

      function translateFieldName(field) {
        // Block#: ADq6EnqnQ-kSAEPqt_C-
        com.fc.JavaScriptDistLib.Debug.printLog(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'name')));
        // Block#: ]X%.lkeG+r4s:MA=uyN2
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(field, 'name', translate((com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'name'))));
        return field;
      }
      /**
       * Describe this function...
       */
      this.getProfileLanguage = getProfileLanguage;

      function getProfileLanguage() {
        return new Promise(function(resolve, reject) {
          // Block#: [2fHx[(3K:myrHeXP.Y0
          com.fc.JavaScriptDistLib.SnapClinical.fetch('/snap-api/user/search/whatLanguage', "GET", JSON.stringify(),
            function(data) {
              // Block#: k{o/G~KHA2X5Lhgi@OH.
              com.fc.JavaScriptDistLib.Storage.add('language', com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'language'))); // Block#: EfU_j~.9}%lH(-@Yo]A~
              LibVars.translatorlib._usedLang = (com.fc.JavaScriptDistLib.Storage.getValue('language'));
              // Block#: [`T_7TC28ewU]_Hiy*51
              resolve({
                name: "success",
                data: data
              });
            },
            function(error) {
              // Block#: kT+yAs@l]M9nRhXt?8k$
              if((com.fc.JavaScriptDistLib.Storage.getValue('language')) == null) {
                // Block#: =NGB[}UgwcrMKosDE`:b
                com.fc.JavaScriptDistLib.Storage.add('language', 'en-US');
              }
              // Block#: eOmD3tI|w5e[7xGazu#2
              LibVars.translatorlib._usedLang = (com.fc.JavaScriptDistLib.Storage.getValue('language'));
              // Block#: ./xY2.78vw($6RvCW6|p
              com.fc.JavaScriptDistLib.Debug.printLog(error);
              // Block#: =zerYORf@@R$u0p;^Q(Q
              resolve({
                name: "failure",
                data: error
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.setProfileLanguage = setProfileLanguage;

      function setProfileLanguage(language) {
        return new Promise(function(resolve, reject) {
          // Block#: d9l{1mqeV.;6H`JQ^ur+
          com.fc.JavaScriptDistLib.SnapClinical.fetch('/snap-api/set-my-language', "PATCH", JSON.stringify(com.fc.JavaScriptDistLib.Dictionary.createDictionary(['language'], [language])),
            function(data) {
              // Block#: cew38l`so`mrY;7r!20:
              com.fc.JavaScriptDistLib.Storage.add('language', language); // Block#: ^OteazG*0a.b[#YB8uHM
              getTranslations().then(response => {;
                if(response.name === "then") {
                  // Block#: wQd1j-e[.#Y2w/gb1bhd
                  resolve({
                    name: "then",
                    data: response.data
                  });
                }
                if(response.name === "catch") {
                  // Block#: 3qq,0w:V(((Bbyo`~f9M
                  resolve({
                    name: "catch",
                    data: response.data
                  });
                }
              });
            },
            function(error) {
              // Block#: 1*k$-KowGKC6@LsK1Cr@
              resolve({
                name: "catch",
                data: error
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.setLargeTranslation = setLargeTranslation;

      function setLargeTranslation(textKey, languageCode, translatedTxt) {
        return new Promise(function(resolve, reject) {
          // Block#: E!n|C)Ko+D747-0JXEEr
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.translatorlib.translationsLocal, textKey)) {
            // Block#: jDj*2OF-#qujnJ%IM`E3
            LibVars.translatorlib.temp = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.translatorlib.translationsLocal, textKey));
            // Block#: 0=x:|GJPM6^s|N^LOBkY
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.translatorlib.temp, languageCode, translatedTxt);
            // Block#: F]OM1NIPw3_YTf[^ko2H
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.translatorlib.translationsLocal, textKey, LibVars.translatorlib.temp);
          } else {
            // Block#: )KCtSLwI~aQCn.r_+G;|
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.translatorlib.translationsLocal, textKey, com.fc.JavaScriptDistLib.Dictionary.createDictionary([languageCode], [translatedTxt]));
          }
        });
      }
    };
    var translatorlib = new TranslatorLib();

    function snapClinicalLogicComponent() {
      lib_instance = "f96bb5h8a9";
      LibVars.snapclinicallogiccomponent = LibVars.snapclinicallogiccomponent || {};

      function WorkflowLibrary() {
        lib_instance = "r7a91ntooe";
        LibVars.workflowlibrary = LibVars.workflowlibrary || {};
        LibVars.workflowlibrary.tempListKey = null;
        LibVars.workflowlibrary._urlSetup = null;
        LibVars.workflowlibrary._userName = null;
        LibVars.workflowlibrary._processDefKey = null;
        LibVars.workflowlibrary._initiatorVar = null;
        LibVars.workflowlibrary._processDefId = null;
        LibVars.workflowlibrary._processData = null;
        LibVars.workflowlibrary._processInstId = null;
        LibVars.workflowlibrary._tasks = null;
        LibVars.workflowlibrary._task = null;
        LibVars.workflowlibrary._processVariabes = null;
        LibVars.workflowlibrary._formProperties = null;
        LibVars.workflowlibrary._taskId = null;
        LibVars.workflowlibrary._formKey = null;
        LibVars.workflowlibrary._formName = null;
        LibVars.workflowlibrary._formData = null;
        LibVars.workflowlibrary._formFields = null;
        LibVars.workflowlibrary._outcomes = null;
        LibVars.workflowlibrary._formId = null;
        LibVars.workflowlibrary.tempNum = null;
        LibVars.workflowlibrary._initiator = null;
        LibVars.workflowlibrary._userPassw = null;
        LibVars.workflowlibrary._taskToBeCompleted = null;
        LibVars.workflowlibrary.tempDict = null;
        LibVars.workflowlibrary.tempDict1 = null;
        LibVars.workflowlibrary.tempParam = null;
        LibVars.workflowlibrary._processInstances = null;
        LibVars.workflowlibrary.tempList = null;
        LibVars.workflowlibrary._outcomeAndFieldMapping = null;
        LibVars.workflowlibrary._currentInitiator = null;
        LibVars.workflowlibrary._templateType = null;
        LibVars.workflowlibrary._templateKey = null;
        LibVars.workflowlibrary._processInstance = null;
        LibVars.workflowlibrary.tempN2 = null;
        LibVars.workflowlibrary.tempList1 = null;
        /**
         * Describe this function...
         */
        this.printoutListOfDict = printoutListOfDict;

        function printoutListOfDict(inputListOfObj) {
          return new Promise(function(resolve, reject) {
            // Block#: aLpZNj6,C{nQZ/8N/?+5
            if(!!inputListOfObj.length && com.fc.JavaScriptDistLib.MathLibrary.mathCompare(inputListOfObj.length, "GT", 0)) {
              // Block#: oa!7k8bDPEV(7Yz{Gq2d
              LibVars.workflowlibrary.tempListKey = [];
              // Block#: JNrWv?.{/%v[C^[I+C$`
              LibVars.workflowlibrary.tempListKey = (com.fc.JavaScriptDistLib.Dictionary.getKeys(inputListOfObj[0]));
              // Block#: ]aeoYkEpa;]uy2w`G{*{
              var indexpo1_end = inputListOfObj.length;
              var indexpo1_inc = 1;
              if(1 > indexpo1_end) {
                let indexpo1_inc = -indexpo1_inc;
              }
              for(indexpo1 = 1; indexpo1_inc >= 0 ? indexpo1 <= indexpo1_end : indexpo1 >= indexpo1_end; indexpo1 += indexpo1_inc) {}
            }
          });
        }
        /**
         * Describe this function...
         */
        this.ShowProcessInfo = ShowProcessInfo;

        function ShowProcessInfo() {
          return new Promise(function(resolve, reject) {
          });
        }
        /**
         * Describe this function...
         */
        this.printoutListOfStrings = printoutListOfStrings;

        function printoutListOfStrings(inputListOfObj) {
          return new Promise(function(resolve, reject) {
            // Block#: ?xT;8-,qmT0}VudEmXag
            if(!!inputListOfObj.length && com.fc.JavaScriptDistLib.MathLibrary.mathCompare(inputListOfObj.length, "GT", 0)) {}
          });
        }
        /**
         * Describe this function...
         */
        this.AppendInfo = AppendInfo;

        function AppendInfo(name2, value) {
          return new Promise(function(resolve, reject) {
          });
        }

        function mathRandomInt(a, b) {
          if(a > b) {
            // Swap a and b to ensure a is smaller.
            var c = a;
            a = b;
            b = c;
          }
          return Math.floor(Math.random() * (b - a + 1) + a);
        }
        /**
         * Describe this function...
         */
        this.testInitSDKforgetful = testInitSDKforgetful;

        function testInitSDKforgetful() {
          return new Promise(function(resolve, reject) {
            // Block#: C?[y]QkXNHz}A_BP6!zX
            LibVars.workflowlibrary._initiatorVar = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['initiator', 'userName', 'userPassw', 'processDefKey', 'urlSetup'], [String('sdkTEST') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(mathRandomInt(1000, 30000))), 'forgetfulUser', '4mn3s14C!', 'SDKv11TestFlow', 'https://developnew.snapclinical.net']);
            // Block#: AiP%e2SaJeRe?3)t;VAQ
            LibVars.workflowlibrary._initiator = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'initiator'));
            // Block#: Bn5ViK1:e8/%r}h$f7|s
            LibVars.workflowlibrary._userName = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'userName'));
            // Block#: J9z#8t3+mdYF_P%kQuIA
            LibVars.workflowlibrary._userPassw = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'userPassw'));
            // Block#: Eh^@o)%:ej63I{G%zFGB
            LibVars.workflowlibrary._processDefKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'processDefKey'));
            // Block#: +EEDyY6L{9So^0|bW2Up
            LibVars.workflowlibrary._urlSetup = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'urlSetup'));
          });
        }
        /**
         * Describe this function...
         */
        this.TestInitSDK = TestInitSDK;

        function TestInitSDK() {
          return new Promise(function(resolve, reject) {
            // Block#: rQO{,%cUbTaY=47}Q56g
            LibVars.workflowlibrary._initiatorVar = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['initiator', 'userName', 'userPassw', 'processDefKey', 'urlSetup'], [String('sdkTEST') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(mathRandomInt(1000, 30000))), 'jessica+test@snapiot.com', '1234@Test', 'SDKv11TestFlow', 'https://developnew.snapclinical.net']);
            // Block#: X1X:~yjfb+;@SH`tUzH+
            LibVars.workflowlibrary._initiator = null;
            // Block#: VM9o$anfu2m0n5Y-mzkB
            LibVars.workflowlibrary._userName = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'userName'));
            // Block#: f$2q36h{3_EXvMmy[{h$
            LibVars.workflowlibrary._userPassw = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'userPassw'));
            // Block#: z=mD)62`^v(+5,tTevOJ
            LibVars.workflowlibrary._processDefKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'processDefKey'));
            // Block#: P:@L;%C93,h].q1{Eb69
            LibVars.workflowlibrary._urlSetup = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._initiatorVar, 'urlSetup'));
          });
        }
        /**
         * Describe this function...
         */
        this.startFlow = startFlow;

        function startFlow() {
          return new Promise(function(resolve, reject) {
            // Block#: zTc|qmmU[Gt6iSegQ#l!
            startNewProcessInstance(LibVars.workflowlibrary._processDefKey, true).then(response => {;
              if(response.name === "success") {
                // Block#: J?:2@%=k(-w=!#FR(G$M
                ShowProcessInfo().then(response => {;
                });
              }
              if(response.name === "failure") {
                // Block#: %de7v4oS+C:*cqE:Vnbu
                com.fc.JavaScriptDistLib.Debug.printLog(com.fc.JavaScriptDistLib.TextLib.convertToText(response.data));
                // Block#: i26()7nO]yfWLMni[tzg
                AppendInfo('-- startFlow  ON FAILURE ', (com.fc.JavaScriptDistLib.TextLib.convertToText(response.data))).then(response => {;
                });
              }
            });
          });
        }
        /**
         * To setup the user name and the password to access to the
         * workflow. Start from here to interact with the workflow.
         */
        this.initWorkflowWithCredentials = initWorkflowWithCredentials;

        function initWorkflowWithCredentials(User, Password, initiator) {
          return new Promise(function(resolve, reject) {
            // Block#: zC@!f!v3k}}*b|GXa$-u
            if(!(User == null || Password == null)) {
              // Block#: ]^$Y;X0-}*l_4$nA?jB9
              LibVars.workflowlibrary._userName = User;
              // Block#: Tx:Fiz?m4vg5,~ypEHr;
              LibVars.workflowlibrary._userPassw = Password;
              // Block#: fYiCub|QVm,4;am/r5Ax
              com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://developnew.snapclinical.net","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":true,"frontEndKey":"mobileApp"}}');
              com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure(LibVars.workflowlibrary._userName, LibVars.workflowlibrary._userPassw, LibVars.workflowlibrary._userName, "mobileApp", "https://developnew.snapclinical.net");
              // Block#: r]_8{Ov/L2qxdxQq0.DT
              if(initiator == null) {
                // Block#: u]~/HF,82OZm!?sA;$h]
                LibVars.workflowlibrary._initiator = '';
              } else {
                // Block#: L?Dm~(C;%$KM[cs^wt{C
                LibVars.workflowlibrary._initiator = initiator;
              }
            }
            // Block#: ^s$Sn}g4Wrilbw03t41H
            eraseParsedVars().then(response => {;
            });
            // Block#: Y@S#J}`:]1w3U^FU}d7F
            com.fc.JavaScriptDistLib.Debug.printLog('SDK initWorkflow with credentials called');
          });
        }
        /**
         * To complete the current task and get the next one if it exists.
         * You have to specify the outcome's name (valid outcome of the current task).
         */
        this.completeAndGetNextTask = completeAndGetNextTask;

        function completeAndGetNextTask(outcomeObj) {
          return new Promise(function(resolve, reject) {
            // Block#: 7=KJb9ZpU,se~aM[d,0g
            com.fc.JavaScriptDistLib.Debug.printLog(String('SDK completeAndGetNextTask ... adding outcome value .. ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeObj)));
            // Block#: mysWPqPsV*o4%n_)0nH9
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary._taskToBeCompleted, 'outcome')) {
              // Block#: A~!@U:B@{vHpa{R?sQ#{
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'outcome', outcomeObj);
            }
            // Block#: *AL$m8VnvpB+=K%.x9[g
            com.fc.JavaScriptDistLib.Debug.printLog(['SDK calling  complete task and get next with ', ' this list of keys in dictionary task: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._taskToBeCompleted)))].join(''));
            // Block#: ^Vv#,#ip6}#r84@zpsv%
            com.fc.JavaScriptDistLib.SnapClinical.completeTaskAndGetNext(LibVars.workflowlibrary._taskToBeCompleted,
              function(process_data) {
                // Block#: !F:A=9i{n^MTKen4#xJ;
                LibVars.workflowlibrary._processData = process_data;
                // Block#: .}]B1v{@Ij+I6k[?]uut
                parseProcessData(false, null).then(response => {;
                });
                // Block#: !fTLMH]:Zf0c|W{kE/[V
                com.fc.JavaScriptDistLib.Debug.printLog(String('SDK completeAndGetNextTask success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._processData))));
                // Block#: 26NQ/=^-rX@1,8O|CP#/
                resolve({
                  name: "success",
                  data: process_data
                });
              },
              function(error_data) {
                // Block#: $2Mybx(ARQF?F..vx3Kc
                com.fc.JavaScriptDistLib.Debug.printLog(String('SDK completeAndGetNextTask error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
                // Block#: oDp}wFLVeirCQ#0?:^_m
                resolve({
                  name: "failure",
                  data: error_data
                });
              });
          });
        }
        /**
         * Describe this function...
         */
        this.getInitVar = getInitVar;

        function getInitVar() {
          // Block#: gPq~?;_z-~G_(Bcn^=|d
          LibVars.workflowlibrary.tempDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['initiator', 'userName', 'userPassw', 'processDefKey', 'urlSetup'], [LibVars.workflowlibrary._initiator, LibVars.workflowlibrary._userName, LibVars.workflowlibrary._userPassw, LibVars.workflowlibrary._processDefKey, LibVars.workflowlibrary._urlSetup]);
          // Block#: N?w23TNVy09rj$)*e(Y3
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getInitVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary.tempDict))));
          return LibVars.workflowlibrary.tempDict;
        }
        /**
         * To start a new instance of the workflow or to resume the last run of it.
         * You must specify
         * - processDefinitionKey will be your Process Identifier (text)
         * - forceStartNewInstance will be set to true if you want to start
         * a new instance or to false if you need to resume an old one.
         */
        this.startNewProcessWithVars = startNewProcessWithVars;

        function startNewProcessWithVars(processDefKey, forceStartNewInstance, listOfVars) {
          return new Promise(function(resolve, reject) {
            // Block#: l`Yd*l[g8F.wxD10iBmH
            LibVars.workflowlibrary.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['forceStartNewInstance'], [forceStartNewInstance]);
            // Block#: fs7fA;$I_%*D,Q_;ej0e
            if(listOfVars != null) {
              // Block#: x7z{V{^lJy:6v9A:):i~
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(listOfVars, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'type'], ['frontEndKey', 'mobileApp', 'string']))
              // Block#: Gd:QsRFiPFHepLX^;awJ
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict1, 'processVariables', listOfVars);
            }
            // Block#: $;SbM8S3Y=bM..5rEksT
            LibVars.workflowlibrary._processDefKey = processDefKey;
            // Block#: (P${f{/X=Gx8=ZK=F3nT
            com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
                "forceStartNewInstance": false
              }, LibVars.workflowlibrary.tempDict1), {
                "processDefinitionKey": processDefKey
              }),
              function(process_data) {
                // Block#: YpWf.ePiTX),W68/JQ?j
                LibVars.workflowlibrary._processData = process_data;
                // Block#: ^z?^L68XOE@d2!(k.7B8
                parseProcessData(false, null).then(response => {;
                });
                // Block#: TgLhWKzt0^{|!u~bXzy*
                com.fc.JavaScriptDistLib.Debug.printLog(String('SDK startNewProcessInstanceWithVars success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._processData))));
                // Block#: 9cQ,mM6!Y|yAmOz0d:rg
                resolve({
                  name: "success",
                  data: process_data
                });
              },
              function(error_data) {
                // Block#: ~r=HiT_6_QbNMax2ZFL.
                com.fc.JavaScriptDistLib.Debug.printLog(String('SDK startNewProcessInstanceWithVars error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
                // Block#: ]g3vK,Q.($GQ{;;p2FkF
                resolve({
                  name: "failure",
                  data: error_data
                });
              });
          });
        }
        /**
         * To complete the current task and get the next one if it exists.
         * You have to specify the outcome's name (valid outcome of the current task).
         */
        this.completeAndGetNextTaskById = completeAndGetNextTaskById;

        function completeAndGetNextTaskById(outcomeId) {
          return new Promise(function(resolve, reject) {
            // Block#: Yvtdyc_^[]=}cSnI*~4e
            com.fc.JavaScriptDistLib.Debug.printLog(String('SDK completeAndGetNextTaskById ...looking for Id  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeId)));
            // Block#: b#$ien{n?@z|Tuv9=bl8
            if(doesExistOutcome(outcomeId)) {
              // Block#: 5y1H.}mF7iDlhW.Iz_Xd
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'outcome', getOutcome(outcomeId));
            }
            // Block#: qI{slP6*N3L0!OWa8/pz
            com.fc.JavaScriptDistLib.SnapClinical.completeTaskAndGetNext(LibVars.workflowlibrary._taskToBeCompleted,
              function(process_data) {
                // Block#: XdDy=(Gj`rF-EuuI.hEb
                LibVars.workflowlibrary._processData = process_data;
                // Block#: !pxYgrn2JJKS#y%ha5xV
                parseProcessData(false, null).then(response => {;
                });
                // Block#: !s|V2~N*I;QtUp3W*$~?
                com.fc.JavaScriptDistLib.Debug.printLog(String('SDK completeAndGetNextTaskById success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._processData))));
                // Block#: @`ke?Ic1NMo4q~Vs8KRW
                resolve({
                  name: "success",
                  data: process_data
                });
              },
              function(error_data) {
                // Block#: J=y3t29Dhb#p[*-{K]u#
                com.fc.JavaScriptDistLib.Debug.printLog(String('SDK completeAndGetNextTaskById error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
                // Block#: RN_Tr*,Y:K?.OtKTT$rK
                resolve({
                  name: "failure",
                  data: error_data
                });
              });
          });
        }
        /**
         * To setup the user name and the password to access to the
         * workflow. Start from here to interact with the workflow.
         */
        this.initWorkflow = initWorkflow;

        function initWorkflow() {
          return new Promise(function(resolve, reject) {
            // Block#: hSdJ!zGqd3nW`R(|Sf|b
            eraseParsedVars().then(response => {;
            });
            // Block#: 1,)Pmk4]Lm63aroPtn?T
            com.fc.JavaScriptDistLib.Debug.printLog('SDK initWorkflow without credentials called');
          });
        }
        /**
         * To start a new instance of the workflow or to resume the last run of it.
         * You must specify
         * - processDefinitionKey will be your Process Identifier (text)
         * - forceStartNewInstance will be set to true if you want to start
         * a new instance or to false if you need to resume an old one.
         */
        this.startNewProcessInstance = startNewProcessInstance;

        function startNewProcessInstance(processDefKey, forceStartNewInstance) {
          return new Promise(function(resolve, reject) {
            // Block#: }q/,[;-@$g=WGfa}:bNG
            LibVars.workflowlibrary.tempParam = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['forceStartNewInstance'], [forceStartNewInstance]);
            // Block#: _.a@//oU1{WOm%#o/xf1
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempParam, 'processVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'type'], ['frontEndKey', 'mobileApp', 'string'])]);
            // Block#: zIQs3yCF/NkA(?4/|u-v
            if(LibVars.workflowlibrary._initiator != null) {
              // Block#: ;/m,htUp.hBP{I/Ez~XO
              if(!com.fc.JavaScriptDistLib.TextLib.textComparison(LibVars.workflowlibrary._initiator, "EQUAL", '')) {
                // Block#: sPF35ko=|eWU*@pLPx7M
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempParam, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', LibVars.workflowlibrary._initiator, 'equals', 'string'])]);
              }
            }
            // Block#: @]Ba!E=3tn~Oj+Wf+FOr
            LibVars.workflowlibrary._processDefKey = processDefKey;
            // Block#: w?kgPk4G/`abd)qr0~)@
            com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
                "forceStartNewInstance": false
              }, LibVars.workflowlibrary.tempParam), {
                "processDefinitionKey": processDefKey
              }),
              function(process_data) {
                // Block#: 4f$QXZ+E0Aq{G1kdn:BL
                LibVars.workflowlibrary._processData = process_data;
                // Block#: Ffc^U`Q4:KIi:s8TwD)p
                parseProcessData(false, null).then(response => {;
                });
                // Block#: YNvH8H}e45(z6)yl=%zg
                com.fc.JavaScriptDistLib.Debug.printLog(String('SDK startNewProcessInstance success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._processData))));
                // Block#: `XnGAXK_~8#a8^^1Q0pB
                resolve({
                  name: "success",
                  data: LibVars.workflowlibrary._processData
                });
              },
              function(error_data) {
                // Block#: QxAXGB2r!RBjr?P,.I/w
                com.fc.JavaScriptDistLib.Debug.printLog(String('SDK startNewProcessInstance error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
                // Block#: FWJsGFdBn_II9yj_]B1g
                resolve({
                  name: "failure",
                  data: error_data
                });
              });
          });
        }
        /**
         * To get the current task if it exists.
         */
        this.getActiveProcessInstances = getActiveProcessInstances;

        function getActiveProcessInstances(processDefKey, latestVersion) {
          return new Promise(function(resolve, reject) {
            // Block#: z2@:P7^44=~j)4}58Q-Y
            LibVars.workflowlibrary._processDefKey = processDefKey;
            // Block#: j*]!vGv^qc[AGgp]`PY8
            LibVars.workflowlibrary.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['processDefinitionKey'], [(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary._processDefKey))]);
            // Block#: 4t|Sp9YrZXU$Hx`=Lu};
            if(latestVersion != null) {
              // Block#: 5Z/WWUm#YB_jGZ?aCUMk
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict1, 'latestVersion', latestVersion);
            }
            // Block#: (?q[nPn/3eWB8,eb:c)W
            if(LibVars.workflowlibrary._initiator != null) {
              // Block#: EwO-oR3l$s-)J!ZV]?OJ
              if(!com.fc.JavaScriptDistLib.TextLib.textComparison(LibVars.workflowlibrary._initiator, "EQUAL", '')) {
                // Block#: KjohidB/ikkCe{|^PnsL
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict1, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', LibVars.workflowlibrary._initiator, 'equals', 'string'])]);
              }
            }
            // Block#: $J:L#(;s|~*0GI[NeS,n
            com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getting process Instances with parameters ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary.tempDict1)));
            // Block#: d4nuXQ:5M8V2yVC2y+cp
            com.fc.JavaScriptDistLib.SnapClinical.fetch('/flow-api/snap-api/get-process-instances', "POST", JSON.stringify(LibVars.workflowlibrary.tempDict1),
              function(data) {
                // Block#: ~wZ/RQ.G`)9#C+xdt?lo
                if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(data, 'processInstances')) {
                  // Block#: r6o$^E*L7-2jj(nbidL1
                  LibVars.workflowlibrary._processInstances = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'processInstances'));
                  // Block#: W@/NoI4WJ=cM9gHZ]Z{1
                  com.fc.JavaScriptDistLib.Debug.printLog('SDK getActiveProcessInstances success');
                  // Block#: ^*^ulNcZnM=2C;BIiBe!
                  parseProcessInstances().then(response => {;
                  });
                  // Block#: y/ur{vaAvbQV?t^(uQqL
                  resolve({
                    name: "success",
                    data: data
                  });
                } else {
                  // Block#: gh%$j0MN=-[jO#@E^*nZ
                  com.fc.JavaScriptDistLib.Debug.printLog('SDK getActiveProcessInstances NO processInstances field in dictionary');
                  // Block#: FKr.fH,-V)8]rYEgqsS2
                  resolve({
                    name: "failure",
                    data: data
                  });
                }
              },
              function(error) {
                // Block#: Fy|bVWQgN?k:ln$%r/3`
                com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getActiveProcessInstances failure --  : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error))));
                // Block#: R5:`s`FGH$IfPAZQ_IT_
                resolve({
                  name: "failure",
                  data: error
                });
              });
          });
        }
        /**
         * To get the current task if it exists.
         */
        this.getActiveTasks = getActiveTasks;

        function getActiveTasks(processDefKey, processInstanceId, taskName) {
          return new Promise(function(resolve, reject) {
            // Block#: ey(cV_wHzhJ9H6qXD]37
            LibVars.workflowlibrary.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
            // Block#: f12dw.TGq}s(s1yD^/lp
            if(processDefKey != null) {
              // Block#: J6Z=cf|3x%@18q=k5[q)
              if(!com.fc.JavaScriptDistLib.TextLib.textComparison(processDefKey, "EQUAL", '')) {
                // Block#: HB|OVu=^enpx,j^/]R6s
                LibVars.workflowlibrary._processDefKey = processDefKey;
                // Block#: rL:v7E@!K_U=|k_~WrLT
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict1, 'processDefinitionKey', LibVars.workflowlibrary._processDefKey);
              }
            }
            // Block#: 4!R@`C:h_-#N0Z0Rep2}
            if(processInstanceId != null) {
              // Block#: ?t}~z.*O`5RA;}2sJD;I
              if(!com.fc.JavaScriptDistLib.TextLib.textComparison(processInstanceId, "EQUAL", '')) {
                // Block#: oCeYVNOV{Zy{9F$2Gj9~
                LibVars.workflowlibrary._processInstId = processInstanceId;
                // Block#: [vM2Gu]]r2A^|hQ2c$D/
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict1, 'processInstanceId', LibVars.workflowlibrary._processInstId);
              }
            }
            // Block#: /8$vg`tlvr)I/-qrnq)f
            if(LibVars.workflowlibrary._initiator != null) {
              // Block#: bGv$z]%iZx_hy^A(mn]$
              if(!com.fc.JavaScriptDistLib.TextLib.textComparison(LibVars.workflowlibrary._initiator, "EQUAL", '')) {
                // Block#: m,a3ucfMrL!k_U,{_EO0
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict1, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', LibVars.workflowlibrary._initiator, 'equals', 'string'])]);
              }
            }
            // Block#: /Ow/jfKcIa%l$Qr_T{C~
            com.fc.JavaScriptDistLib.SnapClinical.getActiveTasks(LibVars.workflowlibrary.tempDict1,
              function(active_tasks) {
                // Block#: Y+XH|qV1|L_]qsg1Qys%
                LibVars.workflowlibrary._processData = active_tasks;
                // Block#: K.t.2K}]vIh6/Mf#l.3b
                parseProcessData(true, taskName).then(response => {;
                });
                // Block#: /HzjPf1m|C+|jS~?f0;T
                com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getActiveTasks success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._processData))));
                // Block#: Yc3-G+0JFUnjl+/[0S4u
                resolve({
                  name: "success",
                  data: active_tasks
                });
              },
              function(error_data) {
                // Block#: ?is]iK53/8^j+r-H;FuH
                com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getActiveTasks error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
                // Block#: 2Uo.6@:,;O.;_YLzMYC5
                resolve({
                  name: "failure",
                  data: error_data
                });
              });
          });
        }
        /**
         * Describe this function...
         */
        this.logout = logout;

        function logout() {
          return new Promise(function(resolve, reject) {
            // Block#: u(:]sWW4V9dP{N4Cu^RO
            com.fc.JavaScriptDistLib.SnapClinical.logout(
              function(success_data) {
                // Block#: Ok%CB-Pd]q`:=/s8+J~K
                LibVars.workflowlibrary._userName = 'forgetfulUser';
                // Block#: k]Y|kiMp/QXlyIFv2`Tk
                LibVars.workflowlibrary._userPassw = '4mn3s14C!';
                // Block#: #WB`ciB-+DICSB@d}Uc;
                com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://developnew.snapclinical.net","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":true,"frontEndKey":"mobileApp"}}');
                com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure(LibVars.workflowlibrary._userName, LibVars.workflowlibrary._userPassw, LibVars.workflowlibrary._userName, "mobileApp", "https://developnew.snapclinical.net");
                // Block#: 8H)qgG~54Cre=yoJ3iiJ
                initWorkflowWithCredentials(null, null, null).then(response => {;
                });
                // Block#: bUgGqtb.bf$Ht^Y-%QR3
                com.fc.JavaScriptDistLib.Debug.printLog('SDK logout success');
                // Block#: ]{kwGk%MfjXgc]IVsPa?
                resolve({
                  name: "then",
                  data: 'SDK logout success'
                });
              },
              function(error_data) {
                // Block#: j/x[.Z^.A%$APcwqf-6x
                com.fc.JavaScriptDistLib.Debug.printLog(String('SDK logout error:') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
                // Block#: c?I`L,=.hrOd?}[1-Ou/
                resolve({
                  name: "catch",
                  data: (String('SDK logout error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))))
                });
              });
          });
        }
        /**
         * Describe this function...
         */
        this.getProcessData = getProcessData;

        function getProcessData() {
          // Block#: cJWzC?e4K2.s.bS5T3z+
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getProcessData list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._processData))));
          return LibVars.workflowlibrary._processData;
        }
        /**
         * Describe this function...
         */
        this.setProcessVariable = setProcessVariable;

        function setProcessVariable(name2, value, type) {
          return new Promise(function(resolve, reject) {
            // Block#: fl``|]bZhX,hsd+4=UBz
            com.fc.JavaScriptDistLib.Debug.printLog(['SDK setProcessVariable num of vars: ', safeLength(LibVars.workflowlibrary._processVariabes), '  adding / setting var: ', name2].join(''));
            // Block#: /#+h`aY2tR8.(S4nB`Jc
            if(doesExistCurrentTask()) {
              // Block#: z-p:pd.s)zS|{{7^r{[c
              if(doesContainProcessVariableName(name2)) {
                // Block#: }rNCd{le_?[aGymKA/FM
                LibVars.workflowlibrary.tempNum = 0;
                // Block#: Re(v%NPcP]DK#yyeoy!w
                var item_list = LibVars.workflowlibrary._processVariabes;
                for(var item_index in item_list) {
                  let item = item_list[item_index];
                  // Block#: ^!7$,e6QAx)K!Ixl.0mT
                  if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", name2)) {
                    // Block#: *S+*GL/c@On+rlqx,}55
                    LibVars.workflowlibrary.tempDict = item;
                    // Block#: J5@4/Gl5WsPEv-DhwD7/
                    com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict, 'value', value);
                    // Block#: R.N)idyNnfb7(I+skE3s
                    LibVars.workflowlibrary._processVariabes[LibVars.workflowlibrary.tempNum] = LibVars.workflowlibrary.tempDict;
                  }
                  // Block#: 7/Us9:R!s_F~=37{d^Q?
                  LibVars.workflowlibrary.tempNum = LibVars.workflowlibrary.tempNum + 1;
                }
              } else {
                // Block#: K8{b.]4*)fBtMo7}Ds[G
                LibVars.workflowlibrary.tempDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'type', 'value'], [name2, type, value]);
                // Block#: wFb8gv7liSAXvA_Jgk.A
                com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.workflowlibrary._processVariabes, LibVars.workflowlibrary.tempDict)
              }
              // Block#: )}(N9doX5kiVPt#_uk5@
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._task, 'processVariables', LibVars.workflowlibrary._processVariabes);
              // Block#: D-i;X3`Uwn^AClSlvd:5
              LibVars.workflowlibrary._tasks[0] = LibVars.workflowlibrary._task;
              // Block#: +a61$mWaDwwZKQTEgH~Y
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._processData, 'tasks', LibVars.workflowlibrary._tasks);
              // Block#: fPHS4XlNp%eN-:,XOjB,
              com.fc.JavaScriptDistLib.Debug.printLog(String('SDK setProcessVariable num of vars now is: ') + String(safeLength(LibVars.workflowlibrary._processVariabes)));
              // Block#: KlEG$rEaQ~Rk}950-A8S
              LibVars.workflowlibrary.tempNum = getIndexOfVarInTaskToBeCompleted(name2);
              // Block#: ]SDFJ:[~R3NMXK*$@h~i
              LibVars.workflowlibrary.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'processVariables'));
              // Block#: I+_=:xhSHjH!OU$iVp(-
              if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.workflowlibrary.tempNum, "EQ", -1)) {
                // Block#: vN3ZQdo#dvO^)W0M/v`Z
                com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.workflowlibrary.tempList, LibVars.workflowlibrary.tempDict)
              } else {
                // Block#: `g*^=/2Ty+Z434}h4Wjv
                LibVars.workflowlibrary.tempList[LibVars.workflowlibrary.tempNum] = LibVars.workflowlibrary.tempDict;
              }
              // Block#: @uV`SeGSX@u!S/V=^_:y
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'processVariables', LibVars.workflowlibrary.tempList);
              // Block#: {,PP60KJ^8T[^~BYqau~
              com.fc.JavaScriptDistLib.Debug.printLog(String('SDK setProcessVariable new val for var added to task to be completed lenght is: ') + String(safeLength(LibVars.workflowlibrary.tempList)));
            } else {
              // Block#: 31gi0ioB4Lvw}%V_e2v[
              com.fc.JavaScriptDistLib.Debug.printLog('SDK no current Task ... nothing to do');
            }
          });
        }
        /**
         * To check if another task is available (true)
         * or the current flow is at the end (false).
         */
        this.doesExistCurrentTask = doesExistCurrentTask;

        function doesExistCurrentTask() {
          // Block#: =8(Ef*9BC62$E7_l3P#d
          com.fc.JavaScriptDistLib.Debug.printLog('SDK doesExixtCurrentTask called');
          // Block#: _yNMsE4};MK%xzk^NnAp
          if(LibVars.workflowlibrary._task == null) {
            return false;
          }
          // Block#: Dx14Nbp7RJ%;nhUmlA%g
          if((com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._task)) == null) {
            return false;
          }
          return !!(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._task)).length;
        }
        /**
         * Describe this function...
         */
        this.getCurrentTask = getCurrentTask;

        function getCurrentTask() {
          // Block#: A//H39vF:Nwf4)0Ptt)[
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getCurrentTask list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._task))));
          return LibVars.workflowlibrary._task;
        }
        /**
         * Describe this function...
         */
        this.getProcessVariables = getProcessVariables;

        function getProcessVariables() {
          // Block#: E`snYA58/d#sQh_a17C[
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getProcessVariables number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(LibVars.workflowlibrary._processVariabes))));
          return LibVars.workflowlibrary._processVariabes;
        }
        /**
         * Describe this function...
         */
        this.getFormProperties = getFormProperties;

        function getFormProperties() {
          // Block#: Q9K_jdXSe}PAge/y=Im@
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getFormProperties number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(LibVars.workflowlibrary._formProperties))));
          return LibVars.workflowlibrary._formProperties;
        }
        /**
         * Describe this function...
         */
        this.doesContainProcessVariableName = doesContainProcessVariableName;

        function doesContainProcessVariableName(target) {
          // Block#: V|qJmmTDcBN/R;.~0*!x
          if(target == null || com.fc.JavaScriptDistLib.TextLib.textComparison(target, "EQUAL", '')) {
            return false;
          }
          // Block#: ryPt/oi=;{`_=;[IsFSs
          var item_list2 = LibVars.workflowlibrary._processVariabes;
          for(var item_index2 in item_list2) {
            let item = item_list2[item_index2];
            // Block#: /~(YAz$I4GpUepu5HhmT
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", target)) {
              return true;
            }
          }
          return false;
        }
        /**
         * Describe this function...
         */
        this.getOutcomeAndFieldMappingNames = getOutcomeAndFieldMappingNames;

        function getOutcomeAndFieldMappingNames() {
          // Block#: }]hO!V5itfl+*{@e+3t;
          LibVars.workflowlibrary.tempList = [];
          // Block#: =E!_C0Emn$i=4w5BY1U{
          var item_list3 = LibVars.workflowlibrary._outcomeAndFieldMapping;
          for(var item_index3 in item_list3) {
            let item = item_list3[item_index3];
            // Block#: (`rebY,UT0Yp!34(.Ddb
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.workflowlibrary.tempList, (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'))))
          }
          // Block#: URUoW(x4w51U!V.Ij+ls
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getOutcomeAndFieldMappingNames  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(LibVars.workflowlibrary.tempList))));
          return LibVars.workflowlibrary.tempList;
        }
        /**
         * Describe this function...
         */
        this.getOutcomeAndFieldMapping = getOutcomeAndFieldMapping;

        function getOutcomeAndFieldMapping() {
          // Block#: HYJJO3YM}m5PH)dot_;L
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getOutcomeAndFieldMapping  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(LibVars.workflowlibrary._outcomeAndFieldMapping))));
          return LibVars.workflowlibrary._outcomeAndFieldMapping;
        }
        /**
         * Describe this function...
         */
        this.getFormProperty = getFormProperty;

        function getFormProperty(id) {
          // Block#: P==W8qd^sLKt/U/T!A`O
          LibVars.workflowlibrary.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: NjA`f7iC6R|Nvuuh_zHT
          if(id == null) {
            return LibVars.workflowlibrary.tempDict;
          }
          // Block#: ZN%M9~+IRToLl{9Tvj;W
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
            return LibVars.workflowlibrary.tempDict;
          }
          // Block#: 7i.OVNCzsfdlV2q4u7%G
          if(LibVars.workflowlibrary._formProperties != null) {
            // Block#: lzsZLHdLML%ib`^$UT~b
            var item_list4 = LibVars.workflowlibrary._formProperties;
            for(var item_index4 in item_list4) {
              let item = item_list4[item_index4];
              // Block#: /x7cK`HZ;{.hb0lNE]Uo
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
                // Block#: nj@:3IQ:)z(t:K9Ob{T@
                LibVars.workflowlibrary.tempDict = item;
              }
            }
          }
          // Block#: K8AE]-RKuIY5h7=!{^BM
          com.fc.JavaScriptDistLib.Debug.printLog(['SDK getFormProperty with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, 'value')))].join(''));
          return LibVars.workflowlibrary.tempDict;
        }
        /**
         * Describe this function...
         */
        this.getProcessVariable = getProcessVariable;

        function getProcessVariable(name2) {
          // Block#: ;#jDl#n`yf:1,8;:lnAR
          LibVars.workflowlibrary.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: XltA0Qsjuc@qZk+g@D:~
          if(name2 == null) {
            return LibVars.workflowlibrary.tempDict;
          }
          // Block#: @(^uxre=m-ru5AROPHfj
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(name2, "EQUAL", '')) {
            return LibVars.workflowlibrary.tempDict;
          }
          // Block#: 8@s)~hjziI?1(]`FB_FY
          if(LibVars.workflowlibrary._processVariabes != null) {
            // Block#: .t6K,XR}:7`WLDV*s|bh
            var item_list5 = LibVars.workflowlibrary._processVariabes;
            for(var item_index5 in item_list5) {
              let item = item_list5[item_index5];
              // Block#: M[|u!ld}E3HE4Gq?d?Cb
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", name2)) {
                // Block#: l}su24J5MF;*~WC.!bw!
                LibVars.workflowlibrary.tempDict = item;
              }
            }
          }
          // Block#: XwO+q]~ZbFl5q];Gp1h{
          com.fc.JavaScriptDistLib.Debug.printLog(['SDK getProcessVariable with name (', name2, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary.tempDict)))].join(''));
          return LibVars.workflowlibrary.tempDict;
        }
        /**
         * Describe this function...
         */
        this.getCurrentInitiator = getCurrentInitiator;

        function getCurrentInitiator() {
          // Block#: $9@jRx_-Dx:f$AAw6RA$
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getCurrentInitiator: ') + String(LibVars.workflowlibrary._currentInitiator));
          return LibVars.workflowlibrary._currentInitiator;
        }
        /**
         * Describe this function...
         */
        this.findTask = findTask;

        function findTask(taskName) {
          // Block#: WTC6-HfO,mUMX(#YO3~2
          if(taskName == null) {
            return 0;
          }
          // Block#: wsgIeYDT,l}jybt9a`;a
          var index_end = LibVars.workflowlibrary._tasks.length - 1;
          var index_inc = 1;
          if(0 > index_end) {
            let index_inc = -index_inc;
          }
          for(index = 0; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
            // Block#: 6_Q{yudk/vZ52}y]C],a
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._tasks[index], 'name'), "EQUAL", taskName)) {
              return index;
            }
          }
          return -1;
        }
        /**
         * Describe this function...
         */
        this.getProcessVariableValue = getProcessVariableValue;

        function getProcessVariableValue(name2) {
          // Block#: $A+E]85X)9yix.DB)Pe)
          LibVars.workflowlibrary.tempDict1 = getProcessVariable(name2);
          // Block#: S{VIIeX4HqAy{5dPron=
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary.tempDict1, 'value')) {
            return null;
          }
          return com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict1, 'value');
        }
        /**
         * Describe this function...
         */
        this.getFormPropertyAttribute = getFormPropertyAttribute;

        function getFormPropertyAttribute(id, attribute) {
          // Block#: $Qypr}D:dDnS34}Rv^qh
          LibVars.workflowlibrary.tempDict = getFormProperty(id);
          // Block#: PWK?Ib/jr67@[`=+[bgs
          if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary.tempDict, attribute))) {
            return null;
          }
          // Block#: Q^9U[?RhR^]#/6M@7BHx
          com.fc.JavaScriptDistLib.Debug.printLog(['SDK getFormPropertyAttribute with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary.tempDict))), ' .. value of attribute ', attribute, ' value ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, attribute)))].join(''));
          return com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, attribute);
        }
        /**
         * Describe this function...
         */
        this.getFormPropertyName = getFormPropertyName;

        function getFormPropertyName(id) {
          // Block#: J*-rAsH1kZb=7ib9-N-t
          LibVars.workflowlibrary.tempParam = getFormPropertyAttribute(id, 'name');
          // Block#: -o{Mn9!*Tgzb4jE5Ifi5
          com.fc.JavaScriptDistLib.Debug.printLog(['SDK getFormPropertyName with id (', id, ') ', ' .. name = ', LibVars.workflowlibrary.tempParam].join(''));
          return LibVars.workflowlibrary.tempParam;
        }
        /**
         * To retrieve the template type you have associated
         * to the current task. This is a specific value set
         * in the form properties section as TemplateType.
         */
        this.getTemplateType = getTemplateType;

        function getTemplateType() {
          // Block#: i[TClUtvG0?cy,~h2[3n
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getTemplateType: ') + String(LibVars.workflowlibrary._templateType));
          return LibVars.workflowlibrary._templateType;
        }
        /**
         * Describe this function...
         */
        this.getFormPropertyValue = getFormPropertyValue;

        function getFormPropertyValue(id) {
          // Block#: DH;d_..2@hQzhZWl3Qay
          LibVars.workflowlibrary.tempParam = getFormPropertyAttribute(id, 'value');
          // Block#: P%{C|4nOh(7dS)67dHv(
          com.fc.JavaScriptDistLib.Debug.printLog(['SDK getFormPropertyValue with id (', id, ') ', ' .. value = ', LibVars.workflowlibrary.tempParam].join(''));
          return LibVars.workflowlibrary.tempParam;
        }
        /**
         * Describe this function...
         */
        this.getProcessInstanceId = getProcessInstanceId;

        function getProcessInstanceId() {
          // Block#: q=)Sb$0J9f2h/7C~Wi}#
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getProcessInstanceId value is: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary._processInstId)));
          return LibVars.workflowlibrary._processInstId;
        }
        /**
         * Describe this function...
         */
        this.getForm = getForm;

        function getForm() {
          // Block#: hi_6#X@QWmYo``}%E6ns
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getForm - List of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._formData))));
          return LibVars.workflowlibrary._formData;
        }
        /**
         * To retrieve all the outcomes coming from the current form.
         */
        this.getOutcomes = getOutcomes;

        function getOutcomes() {
          // Block#: sy(^MV.6A9]*3VwE5d=[
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getFormOutcomes  number of items: ') + String(safeLength(LibVars.workflowlibrary._outcomes)));
          return LibVars.workflowlibrary._outcomes;
        }
        /**
         * To set the value of a specific field (addressed by its id) in the current form.
         */
        this.setField = setField;

        function setField(id, value) {
          return new Promise(function(resolve, reject) {
            // Block#: TzKGO;g_YjLqhS#0X?XE
            LibVars.workflowlibrary.tempNum = 0;
            // Block#: Gmr6DFY_$]$Onm?wH=K8
            while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.workflowlibrary.tempNum, "LT", LibVars.workflowlibrary._formFields.length)) {
              // Block#: ya6:gp/0UhHZ^jZ,n{ws
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._formFields[LibVars.workflowlibrary.tempNum], 'id'), "EQUAL", id)) {
                // Block#: BbpN{WQk!0#mQr.=Y1L;
                LibVars.workflowlibrary.tempDict = LibVars.workflowlibrary._formFields[LibVars.workflowlibrary.tempNum];
                // Block#: ;,+{i7(;#tUIDzDdf{KF
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict, 'value', value);
                // Block#: lUqh=7+A/C(IshM=g9Rk
                LibVars.workflowlibrary._formFields[LibVars.workflowlibrary.tempNum] = LibVars.workflowlibrary.tempDict;
                // Block#: MAcVF+F1OQH~RUf4yV(d
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._formData, 'fields', LibVars.workflowlibrary._formFields);
                // Block#: XU[?$x9Vd_{6#8=^H.?5
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._task, 'formData', LibVars.workflowlibrary._formData);
                // Block#: o6A9$vEvQ$CX`hZNDqc,
                LibVars.workflowlibrary._tasks[0] = LibVars.workflowlibrary._task;
                // Block#: 6IEe*mXQ+Hb:/3;b%:n~
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._processData, 'tasks', LibVars.workflowlibrary._tasks);
                // Block#: $GFA%qdt(C`srr69+Q1@
                com.fc.JavaScriptDistLib.Debug.printLog(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  at index ', LibVars.workflowlibrary.tempNum].join(''));
                // Block#: uR5[y9z{]{l:~;r1?V9c
                LibVars.workflowlibrary.tempNum = getIndexOfFieldInTaskToBeCompleted(id);
                // Block#: _E;9Ai[d5z:$/`.c%=~I
                LibVars.workflowlibrary.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'formData'), 'fields'));
                // Block#: xML5Wx(Qp/zE(45t7ol!
                if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.workflowlibrary.tempNum, "EQ", -1)) {
                  // Block#: UI[pML9Gr$GM?Q/B9gg8
                  com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.workflowlibrary.tempList, LibVars.workflowlibrary.tempDict)
                  // Block#: of_9V_*h-7[70WY{BH#1
                  com.fc.JavaScriptDistLib.Debug.printLog(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  added in task to be completed'].join(''));
                } else {
                  // Block#: jYu#z)/4=AT3N1OT.QDA
                  LibVars.workflowlibrary.tempList[LibVars.workflowlibrary.tempNum] = LibVars.workflowlibrary.tempDict;
                  // Block#: v0v6MPF7=oRnhD2iJyJj
                  com.fc.JavaScriptDistLib.Debug.printLog(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  in task to be completed  at index ', LibVars.workflowlibrary.tempNum].join(''));
                }
                // Block#: v#u]|-I^I$=I%Ra[/shq
                LibVars.workflowlibrary.tempDict1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'formData'));
                // Block#: )fj(zVkdRK;R9vGUb5`u
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict1, 'fields', LibVars.workflowlibrary.tempList);
                // Block#: 4!+*uIn7R;Tlg62eD_}_
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'formData', LibVars.workflowlibrary.tempDict1);
                // Block#: :u:dF[+1Igp{Y96s#Af1
                LibVars.workflowlibrary.tempNum = LibVars.workflowlibrary._formFields.length;
              }
              // Block#: J*42yn66r4)vZ1]G,:{R
              LibVars.workflowlibrary.tempNum = LibVars.workflowlibrary.tempNum + 1;
            }
          });
        }
        /**
         * To retrieve all data coming from a specific field
         * (addressed by its UIObjRef) in the current form.
         */
        this.findFieldByRef = findFieldByRef;

        function findFieldByRef(UIObjRef) {
          // Block#: E`%o_%L1dGWeMJRKQrxZ
          LibVars.workflowlibrary.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: AmMLWFRjWTe2^Zsu;kDQ
          if(UIObjRef == null) {
            return LibVars.workflowlibrary.tempDict;
          }
          // Block#: A|bEyO8:0#l8IBVOquC+
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(UIObjRef, "EQUAL", '')) {
            return LibVars.workflowlibrary.tempDict;
          }
          // Block#: 0-fD_8Yu$rxjLln(~]Z.
          var item_list6 = LibVars.workflowlibrary._formFields;
          for(var item_index6 in item_list6) {
            let item = item_list6[item_index6];
            // Block#: }:t(bf}yQx-BclxW}L/T
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(item, 'params')) {
              // Block#: !?53|IPkE6/t6r+R#ADI
              if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'params'), 'uiobjref')) {
                // Block#: U0Zp:/!GtSl{nv+A!ed%
                if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'params'), 'uiobjref'), "EQUAL", UIObjRef)) {
                  // Block#: jO4#NAf@zsC)3Q48by)U
                  LibVars.workflowlibrary.tempDict = item;
                }
              }
            }
          }
          // Block#: Avn^RG~mVyG$vg%D6oud
          com.fc.JavaScriptDistLib.Debug.printLog(['findFieldByRef: ', UIObjRef, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, 'name'))].join(''));
          return LibVars.workflowlibrary.tempDict;
        }
        /**
         * Describe this function...
         */
        this.getFormKey = getFormKey;

        function getFormKey() {
          // Block#: UF+`UV=b`,zevWhv#k+]
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getFormKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary._formKey)));
          return LibVars.workflowlibrary._formKey;
        }
        /**
         * Describe this function...
         */
        this.getTemplateKey = getTemplateKey;

        function getTemplateKey() {
          // Block#: +I(?+Ahsb|IJ:@-Qd^qq
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getTemplateKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary._templateKey)));
          return LibVars.workflowlibrary._templateKey;
        }
        /**
         * To retrieve all data coming from all the fields in the current form.
         */
        this.getFields = getFields;

        function getFields() {
          // Block#: 2AE2h7pC5GiDeqp.l2RD
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getFields  number of items: ') + String(safeLength(LibVars.workflowlibrary._formFields)));
          return LibVars.workflowlibrary._formFields;
        }
        /**
         * Describe this function...
         */
        this.getRadioButtons = getRadioButtons;

        function getRadioButtons(id) {
          // Block#: kL~]$:SJ`oHep_=_meyI
          LibVars.workflowlibrary.tempList = [];
          // Block#: O5*Z-q4DqKqp:D5TDq8|
          if(id != null && !com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
            // Block#: ?lZ`A_qD[jdQ2wwoB5)z
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'type'), "EQUAL", 'radio-buttons') &&
              com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'fieldType'), "EQUAL", 'OptionFormField')
            ) {
              // Block#: `7;|(C`F]~KCQv~l|D9k
              LibVars.workflowlibrary.tempList = getFieldAttribute(id, 'options');
            }
          }
          // Block#: pl9Eqx:ncTQfLCrr~aD2
          com.fc.JavaScriptDistLib.Debug.printLog(['SDK getRadioButtons id (', id, ') ', ' .. length of  list = ', safeLength(LibVars.workflowlibrary.tempList)].join(''));
          return LibVars.workflowlibrary.tempList;
        }
        /**
         * Describe this function...
         */
        this.getFormName = getFormName;

        function getFormName() {
          // Block#: aKTnD6jr`A{q{YTZwO7Z
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getFormName : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary._formName)));
          return LibVars.workflowlibrary._formName;
        }
        /**
         * To retrieve all data coming from a specific
         * field (addressed by its id) in the current form.
         */
        this.getField = getField;

        function getField(id) {
          // Block#: xL!qrflVW3U]^6E[Ka7X
          LibVars.workflowlibrary.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: )sJIHe}gUXt?_9iK+^0?
          if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
            return LibVars.workflowlibrary.tempDict;
          }
          // Block#: XgNIt?jJ6?T9CsWs3/:U
          var item_list7 = LibVars.workflowlibrary._formFields;
          for(var item_index7 in item_list7) {
            let item = item_list7[item_index7];
            // Block#: !`bO*xQV7m:mj+Q|}a*}
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
              // Block#: %]a_L$pkI|-oIgp;d_^~
              LibVars.workflowlibrary.tempDict = item;
            }
          }
          // Block#: {qd=G*Ep}cbKLFgQA)m?
          com.fc.JavaScriptDistLib.Debug.printLog(['SDK getField by id: ', id, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, 'name'))].join(''));
          return LibVars.workflowlibrary.tempDict;
        }
        /**
         * Describe this function...
         */
        this.getFieldAttribute = getFieldAttribute;

        function getFieldAttribute(id, attribute) {
          // Block#: AE8/N]U,,8buovGLSUT^
          LibVars.workflowlibrary.tempDict = getField(id);
          // Block#: .Fqp|67m^Ay!]7@~[6)L
          if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary.tempDict, attribute))) {
            return null;
          }
          // Block#: AMknf3K|MoXZ{H:1R/_Z
          com.fc.JavaScriptDistLib.Debug.printLog(['SDK getFieldAttribute id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, attribute)))].join(''));
          return com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, attribute);
        }
        /**
         * Describe this function...
         */
        this.getCheckBoxFields = getCheckBoxFields;

        function getCheckBoxFields() {
          // Block#: KgYQHyA[{0h%=dh`_w=w
          LibVars.workflowlibrary.tempList = [];
          // Block#: x=6]f[D:]WW2.Ae_b(LN
          var item_list8 = LibVars.workflowlibrary._formFields;
          for(var item_index8 in item_list8) {
            let item = item_list8[item_index8];
            // Block#: !VHezD%rcRIQgXbY6I#-
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'boolean') &&
              com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'FormField')
            ) {
              // Block#: W.R+J~2c.47gbb7g=0Kr
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.workflowlibrary.tempList, item)
            }
          }
          // Block#: H2)WXl^eh~i-@e^Sdj_m
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getCheckBoxFields   lenght of list is ') + String(safeLength(LibVars.workflowlibrary.tempList)));
          return LibVars.workflowlibrary.tempList;
        }
        /**
         * To set the value of a specific field (addressed
         * by its UIObjRef) in the current form.
         */
        this.setFieldByRef = setFieldByRef;

        function setFieldByRef(UIObjRef, value) {
          return new Promise(function(resolve, reject) {
            // Block#: PkA[wrI4fzxst0S;MTh/
            setField((com.fc.JavaScriptDistLib.Dictionary.getDictValue(findFieldByRef(UIObjRef), 'id')), (com.fc.JavaScriptDistLib.TextLib.convertToText(value))).then(response => {;
            });
            // Block#: zrA8?}+!5{(%@ttT3R:R
            com.fc.JavaScriptDistLib.Debug.printLog(['setFieldByRef: ', UIObjRef, '  value: ', value].join(''));
          });
        }
        /**
         * To retrieve the name of a specific field
         * (addressed by its UIObjRef) in the current form.
         */
        this.findFieldNameByRef = findFieldNameByRef;

        function findFieldNameByRef(UIObjRef) {
          // Block#: 82f25)8;O:)08a%$#cU_
          LibVars.workflowlibrary.tempDict = findFieldByRef(UIObjRef);
          // Block#: dZ6]%)-~$L%6{Mk55nI3
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary.tempDict, 'name')) {
            // Block#: XFP`bPN%G@!O_uD.FJ$A
            LibVars.workflowlibrary.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, 'name'));
          } else {
            // Block#: vu%vGt,6Uk:8L8PK=zm!
            LibVars.workflowlibrary.tempParam = '';
          }
          // Block#: c~^fO3=s}Uv?m-iM}1%a
          com.fc.JavaScriptDistLib.Debug.printLog(['findFieldNameByRef: ', UIObjRef, ' name: ', LibVars.workflowlibrary.tempParam].join(''));
          return LibVars.workflowlibrary.tempParam;
        }
        /**
         * Describe this function...
         */
        this.getDropDown = getDropDown;

        function getDropDown(id) {
          // Block#: xpHGkF|gd$#}]6DXju!`
          LibVars.workflowlibrary.tempList = [];
          // Block#: k{zx,_t0ebEM0Van4H6Z
          if(id != null && !com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
            // Block#: gfCE?yFUub11fN8:|xka
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'type'), "EQUAL", 'dropdown') &&
              com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'fieldType'), "EQUAL", 'OptionFormField')
            ) {
              // Block#: r:H~(ApVAgsg%=0IG@/]
              LibVars.workflowlibrary.tempList = getFieldAttribute(id, 'options');
            }
          }
          // Block#: vF*EB]#~pvJ}^{~QI{v7
          com.fc.JavaScriptDistLib.Debug.printLog(['SDK getDropDown id (', id, ') ', ' .. length of  list = ', safeLength(LibVars.workflowlibrary.tempList)].join(''));
          return LibVars.workflowlibrary.tempList;
        }
        /**
         * Describe this function...
         */
        this.getFieldLabel = getFieldLabel;

        function getFieldLabel(id) {
          // Block#: p|}E|`~~yY28XRG_.w6w
          LibVars.workflowlibrary.tempParam = getFieldAttribute(id, 'name');
          // Block#: Tn]~AZrqwG*RLVYIvt%b
          com.fc.JavaScriptDistLib.Debug.printLog(['SDK getFieldName id (', id, ') ', ' .. value = ', LibVars.workflowlibrary.tempParam].join(''));
          return LibVars.workflowlibrary.tempParam;
        }
        /**
         * Describe this function...
         */
        this.getFieldValue = getFieldValue;

        function getFieldValue(id) {
          // Block#: s6FqVVq=NZ#ucQQU3:zG
          LibVars.workflowlibrary.tempParam = getFieldAttribute(id, 'value');
          // Block#: $6dm%.yz`%+?YAu@Tl]~
          com.fc.JavaScriptDistLib.Debug.printLog(['SDK getFieldValue id (', id, ') ', ' .. value = ', LibVars.workflowlibrary.tempParam].join(''));
          return LibVars.workflowlibrary.tempParam;
        }
        /**
         * Describe this function...
         */
        this.setCheckBoxFields = setCheckBoxFields;

        function setCheckBoxFields(checkBoxValues) {
          return new Promise(function(resolve, reject) {
            // Block#: _XrnXkK56IqcC5i6s/4L
            LibVars.workflowlibrary.tempList = checkBoxValues;
            // Block#: ~/0+F:mGWg/`jvO#WdDp
            var item_list9 = LibVars.workflowlibrary.tempList;
            for(var item_index9 in item_list9) {
              let item = item_list9[item_index9];
              // Block#: ]-AtzMIeHm7qiJ7+f;D{
              setField((com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id')), (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'value'))).then(response => {;
              });
            }
            // Block#: KqQYWVs-xp8oPJJ2DD+/
            com.fc.JavaScriptDistLib.Debug.printLog(['SDK setCheckBoxFields   set the value of ', safeLength(LibVars.workflowlibrary.tempList), 'item/items'].join(''));
          });
        }
        /**
         * To retrieve the value of a specific field
         * (addressed by its UIObjRef) in the current form
         */
        this.findFieldValueByRef = findFieldValueByRef;

        function findFieldValueByRef(UIObjRef) {
          // Block#: -pa`9ks9V+mL|=~ak=fe
          LibVars.workflowlibrary.tempParam = findFieldByRef(UIObjRef);
          // Block#: ;WKPLteeJU.q2Aljj_Dy
          if(!(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary.tempParam)).length) {
            return '';
          }
          // Block#: VZl5#iC7FW`s7g:hqcj(
          LibVars.workflowlibrary.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempParam, 'value'));
          // Block#: cg,DLy$PagPQ6zV#fP1$
          com.fc.JavaScriptDistLib.Debug.printLog(['findFieldValueByRef: ', UIObjRef, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary.tempParam))].join(''));
          return LibVars.workflowlibrary.tempParam;
        }
        /**
         * Describe this function...
         */
        this.getOutcomeName = getOutcomeName;

        function getOutcomeName(id) {
          // Block#: ^ymSIrW:$f28p@6[SI@U
          LibVars.workflowlibrary.tempParam = '';
          // Block#: ~{)~$)O/yh)O{Y%5CQ#X
          if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
            return '';
          }
          // Block#: 4lvrEM]*#hq^O2]:Qm=:
          var item_list10 = LibVars.workflowlibrary._outcomes;
          for(var item_index10 in item_list10) {
            let item = item_list10[item_index10];
            // Block#: TEa|F|P8n,!X.Ll;G_}3
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
              // Block#: 76Faw_b`B(+D/HE5v^H4
              LibVars.workflowlibrary.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'));
            }
          }
          // Block#: 37=4oHW1KOquM92@|%S/
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getOutcomeName by id : ') + String(LibVars.workflowlibrary.tempParam));
          return LibVars.workflowlibrary.tempParam;
        }
        /**
         * Describe this function...
         */
        this.doesExistOutcome = doesExistOutcome;

        function doesExistOutcome(id) {
          // Block#: Hmb|}(N-?u9Vam.DojFf
          if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
            return false;
          }
          // Block#: WAad5%@cF]|J0Nu-+d=c
          var item_list11 = LibVars.workflowlibrary._outcomes;
          for(var item_index11 in item_list11) {
            let item = item_list11[item_index11];
            // Block#: LGQ-c:Ry^kl]E9.SdcSR
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
              return true;
            }
          }
          return false;
        }
        /**
         * To retrieve the id of a specific field
         * (addressed by its UIObjRef) in the current form
         */
        this.findFieldIDByRef = findFieldIDByRef;

        function findFieldIDByRef(UIObjRef) {
          // Block#: ~g_kuTs~[S)9RPjA6vB5
          LibVars.workflowlibrary.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(findFieldByRef(UIObjRef), 'id'));
          // Block#: CKAAyvw./=$iA+pq.L9n
          com.fc.JavaScriptDistLib.Debug.printLog(['findFieldIdByRef: ', UIObjRef, ' ID: ', LibVars.workflowlibrary.tempParam].join(''));
          return LibVars.workflowlibrary.tempParam;
        }
        /**
         * Describe this function...
         */
        this.getIdofFirstRadioButtonField = getIdofFirstRadioButtonField;

        function getIdofFirstRadioButtonField() {
          // Block#: c;r0yn;{i`q,NI`93T2{
          var item_list12 = LibVars.workflowlibrary._formFields;
          for(var item_index12 in item_list12) {
            let item = item_list12[item_index12];
            // Block#: fe0oj*!QQ5WMS14rD3Rk
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'radio-buttons') &&
              com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'OptionFormField')
            ) {
              return com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id');
            }
          }
          return '';
        }
        /**
         * Describe this function...
         */
        this.getOutcome = getOutcome;

        function getOutcome(id) {
          // Block#: z_OwH@Vp!,|V.m?-5rR7
          LibVars.workflowlibrary.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: aeK}#_56a0FW1;FlI/RA
          if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
            return LibVars.workflowlibrary.tempDict1;
          }
          // Block#: @-q#8vSu_;2Fy2N.F])N
          var item_list13 = LibVars.workflowlibrary._outcomes;
          for(var item_index13 in item_list13) {
            let item = item_list13[item_index13];
            // Block#: n6w*.;8h*VC,sx]BPLCz
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
              // Block#: =c~Nd@B.[P1(9iv[U:0C
              LibVars.workflowlibrary.tempDict1 = item;
            }
          }
          // Block#: Q:N_kRnFcj/3%}|gFkR,
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK getOutcome by id : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary.tempDict1)));
          return LibVars.workflowlibrary.tempDict1;
        }
        /**
         * To retrieve all data coming from a specific field
         * (addressed by its UIObjRef) in the current form.
         */
        this.doesExistField = doesExistField;

        function doesExistField(id) {
          // Block#: G72*ZfWyTVTTF*YW+;u3
          if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
            return false;
          }
          // Block#: 0-zs0K4{G%DLexMoi@1l
          if(LibVars.workflowlibrary._formFields != null) {
            // Block#: $8p*?d{P+-m|/n`#OWXv
            var item_list14 = LibVars.workflowlibrary._formFields;
            for(var item_index14 in item_list14) {
              let item = item_list14[item_index14];
              // Block#: imU3?.3TfXu=qUOz[4Vg
              if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(item, 'id')) {
                // Block#: O{V`?*@eRf||XBK]`Z2J
                if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
                  return true;
                }
                // Block#: u]nwgfv?0gzJ4|QKa8ba
                com.fc.JavaScriptDistLib.Debug.printLog(String('SDK  doesExistField (true) by ID ') + String(id));
              }
            }
          }
          return false;
        }
        /**
         * Describe this function...
         */
        this.getIdofFirstDropDownField = getIdofFirstDropDownField;

        function getIdofFirstDropDownField() {
          // Block#: (6HA`fN(9Sz3W(Lz8Ocd
          var item_list15 = LibVars.workflowlibrary._formFields;
          for(var item_index15 in item_list15) {
            let item = item_list15[item_index15];
            // Block#: pl5}DXcGGD{yp*vWMxKW
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'dropdown') &&
              com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'OptionFormField')
            ) {
              return com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id');
            }
          }
          return '';
        }
        /**
         * Describe this function...
         */
        this.parseProcessData = parseProcessData;

        function parseProcessData(onlyTasks, taskName) {
          return new Promise(function(resolve, reject) {
            // Block#: @gAO(;-Sg]8To(=X}re4
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary._processData, 'tasks')) {
              // Block#: Yr/Jjy)mmHX]y^R@fYj.
              if(onlyTasks) {
                // Block#: LFd#A)k1i#tv7du[`:iA
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._processData, 'processDefinitionId', LibVars.workflowlibrary._processDefId);
                // Block#: DEb*@bhZ(iB+Q*4jdIfX
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._processData, 'processInstanceId', LibVars.workflowlibrary._processInstId);
              } else {
                // Block#: SP]WIS;PVMZed}w;E,%l
                LibVars.workflowlibrary._processDefId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._processData, 'processDefinitionId'));
                // Block#: )-n$f=^RE^s%/u/v5CG`
                LibVars.workflowlibrary._processInstId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._processData, 'processInstanceId'));
              }
              // Block#: {)K1fEF5ZmskQZ(gCUMf
              LibVars.workflowlibrary._tasks = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._processData, 'tasks'));
              // Block#: -|}FM!p8ouLw27^W5+^X
              if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.workflowlibrary._tasks.length, "NEQ", 0)) {
                // Block#: hjaU2,-{9{E4g6;?bkQH
                if(taskName == null) {
                  // Block#: wznhThYgRvX5+o#UsnFF
                  LibVars.workflowlibrary.tempNum = 0;
                } else {
                  // Block#: l+-TCIW([@{]dFmVzBKP
                  LibVars.workflowlibrary.tempNum = findTask(taskName);
                }
                // Block#: EKSB-:X05^]lT.T}3xo$
                com.fc.JavaScriptDistLib.Debug.printLog(['SDK  Parse process data using this index    ', LibVars.workflowlibrary.tempNum, ' to select the task in the list'].join(''));
                // Block#: 9n(mzPhQVqIP@tsP9}Q,
                if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.workflowlibrary.tempNum, "GTE", 0)) {
                  // Block#: %Y.h?!mLo?*:XJ`?HC(x
                  LibVars.workflowlibrary._task = LibVars.workflowlibrary._tasks[LibVars.workflowlibrary.tempNum];
                  // Block#: @s+xVTyZu?vH{3/QqK/M
                  LibVars.workflowlibrary._taskId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._task, 'taskId'));
                  // Block#: ;lkB|GpVV+eKQ-NXc.[p
                  LibVars.workflowlibrary._taskToBeCompleted = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['taskId', 'processVariables'], [LibVars.workflowlibrary._taskId, []]);
                  // Block#: /n)2UnL6A#Yt+#`@=/!I
                  com.fc.JavaScriptDistLib.Debug.printLog(['SDK task to be completed  ', 'was just created with  taskId and ', ' process Variables as empty list'].join(''));
                  // Block#: w(1=`TR5)MjF5YS%4//%
                  LibVars.workflowlibrary._processVariabes = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._task, 'processVariables'));
                  // Block#: dt-R4,=3zf*9/Lf2{s(k
                  LibVars.workflowlibrary._formProperties = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._task, 'formProperties'));
                  // Block#: 13nFK!PGr8GVn`j}+K0a
                  buildOutcomeAndFieldMappingList().then(response => {;
                  });
                  // Block#: tlpg10)NnX990p@Dib{h
                  buildCurrentInitiator().then(response => {;
                  });
                  // Block#: lQV-ld|j0(,1c+}iRQK2
                  LibVars.workflowlibrary._formKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._task, 'formKey'));
                  // Block#: _xH3pb~tChiPpQO_m7%4
                  if(LibVars.workflowlibrary._formKey != null) {
                    // Block#: o(t:yCA-?1Xwkj5l.`bo
                    if(LibVars.workflowlibrary._formKey != '') {
                      // Block#: Dcm3,A1%m7(Ld0be,b6q
                      com.fc.JavaScriptDistLib.Debug.printLog(String('SDK current Task list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._task))));
                      // Block#: ~|?3Hc+J|7y0s?}/MYHc
                      LibVars.workflowlibrary._formData = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._task, 'formData'));
                      // Block#: [?w3ImWd`tU6Gy)$L$oG
                      com.fc.JavaScriptDistLib.Debug.printLog(String('SDK current FormData list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._formData))));
                      // Block#: I_.O{No3oop2:d(jf,+^
                      LibVars.workflowlibrary._formName = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._formData, 'name'));
                      // Block#: `iy*JV!dKW79X(^@lpt,
                      if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._formData, 'fields')) == null) {
                        // Block#: f3ws+*g.~+!U]N$xxR11
                        LibVars.workflowlibrary._formFields = [];
                      } else {
                        // Block#: 6#|4G~yZXaOXUC/z9-3W
                        LibVars.workflowlibrary._formFields = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._formData, 'fields'));
                      }
                      // Block#: [%[RlD+;SFjjw_#uXGLy
                      com.fc.JavaScriptDistLib.Debug.printLog(String('SDK current FormFields number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.workflowlibrary._formFields.length)));
                      // Block#: 8Bokob5@%F}4F$o9O-Ym
                      LibVars.workflowlibrary._outcomes = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._formData, 'outcomes'));
                      // Block#: `GuQb`Ket2{nA?)ypK%+
                      LibVars.workflowlibrary._formId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._formData, 'id'));
                      // Block#: 3mR|bI,_w:xDPPp!`yWL
                      buildTemplateKey().then(response => {;
                      });
                      // Block#: *(vF8uJk=}.eajVrOY5S
                      com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'formData', com.fc.JavaScriptDistLib.Dictionary.createDictionary(['id', 'key', 'name', 'fields'], [LibVars.workflowlibrary._formId, LibVars.workflowlibrary._formKey, LibVars.workflowlibrary._formName, []]));
                      // Block#: 4ztn~_pPUfT+$CuSOtcZ
                      com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'outcome', com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary());
                      // Block#: SbEu^j+BhYGK*7#yBG;H
                      com.fc.JavaScriptDistLib.Debug.printLog(['SDK  task to be completed, added ', 'formId formKey and formName:', LibVars.workflowlibrary._formId, ' ', LibVars.workflowlibrary._formKey, ' ', LibVars.workflowlibrary._formName, '  and fields as empty list'].join(''));
                    }
                  }
                } else {
                  // Block#: *w]5bGrB$}/{=EwsppeN
                  eraseParsedTasks().then(response => {;
                  });
                }
              } else {
                // Block#: }cF{ubs(?uKMmX=_xdGE
                eraseParsedTasks().then(response => {;
                });
              }
            } else {
              // Block#: R`K;C%o,{rT^ES.)8EH;
              if(onlyTasks == false) {
                // Block#: E#Cds}sp)(bP`iRL`A@h
                eraseParsedVars().then(response => {;
                });
              } else {
                // Block#: DT_2-W;?,?{zDoe@jp)o
                eraseParsedTasks().then(response => {;
                });
              }
            }
          });
        }
        /**
         * Describe this function...
         */
        this.eraseParsedVars = eraseParsedVars;

        function eraseParsedVars() {
          return new Promise(function(resolve, reject) {
            // Block#: :;k}H}ugLxKk@y`$!0.+
            LibVars.workflowlibrary._processDefId = '';
            // Block#: 4#+=3[=gnmpKOQe+lS2b
            LibVars.workflowlibrary._processInstId = '';
            // Block#: @klgC/T(4IX/WgYh24=/
            LibVars.workflowlibrary._processData = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
            // Block#: Tu5:|4f`Q0HDD8OoLA;9
            eraseParsedTasks().then(response => {;
            });
          });
        }
        /**
         * Describe this function...
         */
        this.eraseProcessInstances = eraseProcessInstances;

        function eraseProcessInstances() {
          return new Promise(function(resolve, reject) {
            // Block#: rxyAb{L]yataOl5ty$~p
            LibVars.workflowlibrary._processInstance = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
            // Block#: j%g1*^M^9htiO1N,!vXP
            LibVars.workflowlibrary._processInstances = [];
          });
        }
        /**
         * Describe this function...
         */
        this.getIndexOfFieldInTaskToBeCompleted = getIndexOfFieldInTaskToBeCompleted;

        function getIndexOfFieldInTaskToBeCompleted(id) {
          // Block#: 5=t7)tc,=*|1%EX*E:ar
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary._taskToBeCompleted, 'formData')) {
            // Block#: e^MNyo:cL}rgzwQiDh:W
            LibVars.workflowlibrary.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'formData'), 'fields'));
            // Block#: I8*RkEssW?gZN6oC^`fv
            LibVars.workflowlibrary.tempN2 = 0;
            // Block#: Rmax|B_*1=ZM(jS@if@z
            while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.workflowlibrary.tempN2, "LT", LibVars.workflowlibrary.tempList.length)) {
              // Block#: Vd=`^eeI0qj+J}/%LOK$
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempList[LibVars.workflowlibrary.tempN2], 'id'), "EQUAL", id)) {
                return LibVars.workflowlibrary.tempN2;
              }
              // Block#: Z{Jl#bGbdcj];r]_hB?%
              LibVars.workflowlibrary.tempN2 = LibVars.workflowlibrary.tempN2 + 1;
            }
          }
          return -1;
        }
        /**
         * Describe this function...
         */
        this.parseProcessInstances = parseProcessInstances;

        function parseProcessInstances() {
          return new Promise(function(resolve, reject) {
            // Block#: A+6!5KzJQo/kx!@}Et:g
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.workflowlibrary._processInstances.length, "GT", 0)) {
              // Block#: f5%|B..:cO+qaH/~Zye1
              LibVars.workflowlibrary._processInstance = LibVars.workflowlibrary._processInstances[0];
              // Block#: c-;=6HC9M$?A#fcC5)-2
              if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary._processInstance, 'processInstanceId')) {
                // Block#: e1I,qRai}Ej2NQ_D2mB|
                com.fc.JavaScriptDistLib.Debug.printLog(['SDK parseProcessInstances num of instances: ', LibVars.workflowlibrary._processInstances.length, '  list of keys in the first instance: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary._processInstance)))].join(''));
              }
            } else {
              // Block#: ]Hdx)(J/f!Pd:P7lp,Z1
              LibVars.workflowlibrary._processInstance = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
              // Block#: 13[HIvY12@6=}71jk5/I
              com.fc.JavaScriptDistLib.Debug.printLog('SDK parseProcessInstances NO instances');
            }
          });
        }
        /**
         * Describe this function...
         */
        this.eraseParsedTasks = eraseParsedTasks;

        function eraseParsedTasks() {
          return new Promise(function(resolve, reject) {
            // Block#: `1)6I?;*46Elnhk!$W-%
            LibVars.workflowlibrary._tasks = [];
            // Block#: ]erpGI6Z!az:aaD*0IMe
            LibVars.workflowlibrary._task = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
            // Block#: tsGx{m1uu,{DX]t/$:1A
            LibVars.workflowlibrary._taskToBeCompleted = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
            // Block#: L$AjHOz3TmMbAy:IH!6(
            LibVars.workflowlibrary._taskId = '';
            // Block#: E/4U*6@{zzW-2_iiNoAv
            LibVars.workflowlibrary._processVariabes = [];
            // Block#: yvsCWM*;UKj4XKK6hFA4
            LibVars.workflowlibrary._formKey = '';
            // Block#: 4DX?v}b)@G|W2MFTa=;M
            LibVars.workflowlibrary._formName = '';
            // Block#: }n|T|=,dlISig~Y?W-Mx
            LibVars.workflowlibrary._formProperties = [];
            // Block#: -?Waxyi;sEo1UMZiyL]Y
            LibVars.workflowlibrary._outcomeAndFieldMapping = [];
            // Block#: rE)vDJewW2F{[A7rk$#5
            LibVars.workflowlibrary._templateType = '';
            // Block#: _is#z`ZULGZl!a_NauGg
            LibVars.workflowlibrary._templateKey = '';
            // Block#: Ayd96ng%IgXwf28dtSEx
            LibVars.workflowlibrary._formData = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
            // Block#: pHR%GqwfZG[oqh_(Y0MH
            LibVars.workflowlibrary._formFields = [];
            // Block#: {YG|c3Fb12Ro}cZ[9gCq
            LibVars.workflowlibrary._outcomes = [];
            // Block#: |[z2#-caB;%Pd/=[|f31
            LibVars.workflowlibrary._formId = '';
          });
        }
        /**
         * Describe this function...
         */
        this.buildTemplateKey = buildTemplateKey;

        function buildTemplateKey() {
          return new Promise(function(resolve, reject) {
            // Block#: [SyH.#_-!8t(}vV+!]^r
            LibVars.workflowlibrary._templateKey = '';
            // Block#: Ag5u~N%yOV)||l]b0^lU
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary._formData, 'properties')) {
              // Block#: iWd7*23H#sqw+wfT^MFF
              LibVars.workflowlibrary.tempDict1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._formData, 'properties'));
              // Block#: j@$$-rt-WX$u2}g.j5Ak
              if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary.tempDict1, 'templateKey')) {
                // Block#: GhC~vu/a#D(a~p%@KXYR
                LibVars.workflowlibrary._templateKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict1, 'templateKey'));
              }
            }
          });
        }
        /**
         * Describe this function...
         */
        this.getIndexOfVarInTaskToBeCompleted = getIndexOfVarInTaskToBeCompleted;

        function getIndexOfVarInTaskToBeCompleted(name2) {
          // Block#: keut5NnNVASw]WxPR@s;
          LibVars.workflowlibrary.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._taskToBeCompleted, 'processVariables'));
          // Block#: 6B7]HI%Y.#Ryu:^p|8Vl
          LibVars.workflowlibrary.tempN2 = 0;
          // Block#: |oK40tIWA!G)nm0(!#{#
          while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.workflowlibrary.tempN2, "LT", LibVars.workflowlibrary.tempList.length)) {
            // Block#: ``J|E}D/!f~A@;(OT{jy
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempList[LibVars.workflowlibrary.tempN2], 'name'), "EQUAL", name2)) {
              return LibVars.workflowlibrary.tempN2;
            }
            // Block#: +9z_@/4V1Jjk$_#N5B.v
            LibVars.workflowlibrary.tempN2 = LibVars.workflowlibrary.tempN2 + 1;
          }
          return -1;
        }
        /**
         * Describe this function...
         */
        this.setQueryVarInitiator = setQueryVarInitiator;

        function setQueryVarInitiator(inputDict) {
          // Block#: I`C*@9m{sn9c]v}6dnv*
          LibVars.workflowlibrary.tempDict = inputDict;
          // Block#: [S_s%}=?(;v%vsnm]:{p
          if(LibVars.workflowlibrary._initiator != null) {
            // Block#: Xw|Dfl+,w{-|0ltSXXli
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(LibVars.workflowlibrary._initiator, "EQUAL", '')) {
              // Block#: ;t],Gxq}M}S+%nP90]7;
              if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.workflowlibrary.tempDict, 'queryVariables'))) {
                // Block#: nO3?[}L8RY0-9[hmN[+q
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict, 'queryVariables', []);
              }
              // Block#: 2Sp2gT#p/y!IWM5vevAa
              LibVars.workflowlibrary.tempNum = 0;
              // Block#: Y}SNhFxy2P/ExErGTg2!
              LibVars.workflowlibrary.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary.tempDict, 'queryVariables'));
              // Block#: h8r8Dw9qtI7.+.LJkN_+
              var item_list16 = LibVars.workflowlibrary.tempList;
              for(var item_index16 in item_list16) {
                let item = item_list16[item_index16];
                // Block#: JRdHih:eqQ-g?iGN$d_j
                if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", 'initiator')) {
                  // Block#: Ta+xCSU=LZd)lxB3NgjU
                  LibVars.workflowlibrary.tempDict1 = item;
                  // Block#: Ih]Yt~lm~L4A$drxq]tF
                  com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict1, 'value', LibVars.workflowlibrary._initiator);
                  // Block#: M6cW/C`;U/q^fS9L[Ej*
                  LibVars.workflowlibrary.tempList[LibVars.workflowlibrary.tempNum] = LibVars.workflowlibrary.tempDict1;
                  // Block#: b8XTt8?7G*(ol#^n()E_
                  com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict, 'queryVariables', LibVars.workflowlibrary.tempList);
                  // Block#: ekdY(*D4A!*$smi,OF{p
                  com.fc.JavaScriptDistLib.Debug.printLog(['SDK setQueryVarInitiator .. updating initiator value at index: ', LibVars.workflowlibrary.tempNum, '  value is: ', LibVars.workflowlibrary._initiator].join(''));
                  // Block#: m?AKo%Adnv9FMq6Dt:7b
                  if(true) {
                    return LibVars.workflowlibrary.tempDict;
                  }
                }
                // Block#: aT~mP3uMj`0L^4p[X$8%
                LibVars.workflowlibrary.tempNum = LibVars.workflowlibrary.tempNum + 1;
              }
              // Block#: ouS*NN(l-!a8Ff4n!qee
              LibVars.workflowlibrary.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', LibVars.workflowlibrary._initiator, 'equals', 'string']);
              // Block#: -?k/m#jcx/L7BU^]q)=C
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.workflowlibrary.tempList, LibVars.workflowlibrary.tempDict1)
              // Block#: zwxfx]Snmt,dhQIVd/x$
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.workflowlibrary.tempDict, 'queryVariables', LibVars.workflowlibrary.tempList);
              // Block#: du/brfY=h5-7zd%K:04|
              com.fc.JavaScriptDistLib.Debug.printLog(String('SDK setQueryVarInitiator .. adding initiator value: ') + String(LibVars.workflowlibrary._initiator));
            }
          }
          return LibVars.workflowlibrary.tempDict;
        }
        /**
         * Describe this function...
         */
        this.buildOutcomeAndFieldMappingList = buildOutcomeAndFieldMappingList;

        function buildOutcomeAndFieldMappingList() {
          return new Promise(function(resolve, reject) {
            // Block#: !zTRIn_acFMrK?Qf3uuD
            LibVars.workflowlibrary._outcomeAndFieldMapping = [];
            // Block#: s9I,tr88FpWEs8]EaSP}
            LibVars.workflowlibrary._templateType = '';
            // Block#: -@#eG~U^wUN{4U5{;s%q
            var item_list17 = LibVars.workflowlibrary._formProperties;
            for(var item_index17 in item_list17) {
              let item = item_list17[item_index17];
              // Block#: ?xKhVH~{w,}O*{s)K4lp
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", 'outcomeAndFieldMapping')) {
                // Block#: ,O7OB-6,?b!frFT$`:Iz
                if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'enum')) {
                  // Block#: =udcCLDdQ[hOmcD?;RJQ
                  LibVars.workflowlibrary._outcomeAndFieldMapping = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'enumValues'));
                }
              } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", 'TemplateType')) {
                // Block#: bfT8Pyt-47nEF{@LPX/*
                LibVars.workflowlibrary._templateType = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'));
              }
            }
            // Block#: AOC3_A!HOy:1Vt=_jSkr
            com.fc.JavaScriptDistLib.Debug.printLog(String('SDK buildOutcomeAndFieldMapping - num of items: ') + String(safeLength(LibVars.workflowlibrary._outcomeAndFieldMapping)));
            // Block#: IqKY2LntscRsSm9L0vt,
            com.fc.JavaScriptDistLib.Debug.printLog(String('SDK buildTemplateType: ') + String(LibVars.workflowlibrary._templateType));
          });
        }
        /**
         * Describe this function...
         */
        this.safeLength = safeLength;

        function safeLength(inputList) {
          // Block#: glI,/-IIC2m3q(#B@0pr
          if(inputList == null) {
            return 0;
          }
          // Block#: GSO$$)x|O|7tr+uS(*0v
          if(!inputList.length) {
            return 0;
          }
          return inputList.length;
        }
        /**
         * Describe this function...
         */
        this.buildVar = buildVar;

        function buildVar(name2, value) {
          // Block#: w)Yy*@v@2W+!Xz%A9Iko
          LibVars.workflowlibrary.tempDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value'], [name2, value]);
          // Block#: p~+:u^kv.$ZD!j]b4eXU
          com.fc.JavaScriptDistLib.Debug.printLog(String('SDK buildVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.workflowlibrary.tempDict))));
          return LibVars.workflowlibrary.tempDict;
        }
        /**
         * Describe this function...
         */
        this.buildCurrentInitiator = buildCurrentInitiator;

        function buildCurrentInitiator() {
          return new Promise(function(resolve, reject) {
            // Block#: #dx0sJ3OcN9E!dSn,@w}
            LibVars.workflowlibrary._currentInitiator = '';
            // Block#: jHrhOwD8VquA{dXlLdJ*
            LibVars.workflowlibrary.tempList1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.workflowlibrary._task, 'processVariables'));
            // Block#: TyeWO=ugu[|]vH}2ZvkP
            var item_list18 = LibVars.workflowlibrary.tempList1;
            for(var item_index18 in item_list18) {
              let item = item_list18[item_index18];
              // Block#: 9?C74H7ixEt$W%90ZT~;
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", 'initiator')) {
                // Block#: yI~y8%,|JLTZifJ/^dAU
                LibVars.workflowlibrary._currentInitiator = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'value'));
              }
            }
          });
        }
        com.fc.JavaScriptDistLib.SnapClinical.configure('{"api":{"url":"https://developnew.snapclinical.net","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":true,"frontEndKey":"mobileApp"}}');
      };
      var workflowlibrary = new WorkflowLibrary();
      LibVars.snapclinicallogiccomponent.nextProcessAfterCompletion = null;
      LibVars.snapclinicallogiccomponent.FormFieldRef = null;
      /**
       * To setup the user name and the password to access to the
       * workflow. Start from here to interact with the workflow.
       */
      this.inititializeSnapClinical = inititializeSnapClinical;

      function inititializeSnapClinical(User, Password) {
        return new Promise(function(resolve, reject) {
          // To setup the user name and the password to access to the
          // workflow. Start from here to interact with the workflow.
          // Block#: k^GHRqycqdW4/ceYkGV@
          workflowlibrary.initWorkflowWithCredentials(User, Password, null).then(response => {;
          });
        });
      }
      /**
       * To complete the current task and get the next one if it exists.
       * You have to specify the outcome's ID (valid outcome of the current task).
       */
      this.completeTask = completeTask;

      function completeTask(outcomeId) {
        return new Promise(function(resolve, reject) {
          // To complete the current task and get the next one if it exists.
          // You have to specify the outcome's name (valid outcome of the current task).
          // Block#: |#7!LU4|cLBkk~aq`P;C
          workflowlibrary.completeAndGetNextTaskById(outcomeId).then(response => {;
            if(response.name === "success") {
              // To check if another task is available (true) or the current flow is at the end (false).
              // Block#: :eV9AAXG,g/!n+yfs/_=
              if(workflowlibrary.doesExistCurrentTask()) {
                // Describe this function...
                // Block#: !{KSNl/Kf_bKb2WBYVP!
                com.fc.JavaScriptDistLib.Screen.displayScreenWithName(workflowlibrary.getTemplateKey());
              } else {
                // Block#: /onn74Mo)4FW{F;q(@tY
                onFlowCompletion().then(response => {;
                });
              }
              // Block#: VCP$2nf.l,so~42$Rj|q
              if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(getProcessVariable('switchToProcess'), 'value')) {
                // Block#: lbL0c0$o0m/N6C2)0_nF
                LibVars.snapclinicallogiccomponent.nextProcessAfterCompletion = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(getProcessVariable('switchToProcess'), 'value'));
              }
              // Block#: *%)0P5{n,gxV]ULVKF)+
              resolve({
                name: "success",
                data: response.data
              });
            }
            if(response.name === "failure") {
              // Block#: 7k)}.$0WVG^pC57xkZdg
              resolve({
                name: "failure",
                data: response.data
              });
            }
          });
        });
      }
      /**
       * To start a new instance of the workflow or to resume the last run of it.
       * You must specify
       * - processDefinitionKey will be your Process Identifier (text)
       * - forceStartNewInstance will be set to true if you want to start
       * a new instance or to false if you need to resume an old one.
       */
      this.startNewFlow = startNewFlow;

      function startNewFlow(ProcessDefinitionKey, StartNewFlow) {
        return new Promise(function(resolve, reject) {
          // To start a new instance of the workflow or to resume the last run of it.
          // You must specify
          // - processDefinitionKey will be your Process Identifier (text)
          // - forceStartNewInstance will be set to true if you want to start
          // a new instance or to false if you need to resume an old one.
          // Block#: sEjP?,$S*S_flWn}o,p(
          workflowlibrary.startNewProcessInstance(ProcessDefinitionKey, StartNewFlow).then(response => {;
            if(response.name === "success") {
              // To check if another task is available (true) or the current flow is at the end (false).
              // Block#: Ht|#g4M+u`|AEWb+g(ZZ
              if(workflowlibrary.doesExistCurrentTask()) {
                // Describe this function...
                // Block#: Fj50SG*98,f^aV8^h6GI
                com.fc.JavaScriptDistLib.Screen.displayScreenWithName(workflowlibrary.getTemplateKey());
              } else {
                // Block#: !KG`p2o.Q9Cg71ilD2rU
                onFlowCompletion().then(response => {;
                });
              }
              // Block#: V-xIt{@a~~tbe]-gk=SU
              resolve({
                name: "success",
                data: response.data
              });
            }
            if(response.name === "failure") {
              // Block#: 2f7Kwe*F?H-L^p24*,U.
              resolve({
                name: "failure",
                data: response.data
              });
            }
          });
        });
      }
      /**
       * To get the outcome name by ID
       */
      // Describe this function...
      this.getOutcome = getOutcome;

      function getOutcome(id) {
        return workflowlibrary.getOutcomeName(id);
      }
      /**
       * To check if exists an outcome with the specified ID...
       */
      // Describe this function...
      this.doesOutcomeExist = doesOutcomeExist;

      function doesOutcomeExist(id) {
        return workflowlibrary.doesExistOutcome(id);
      }
      /**
       * To get the current ScreenName
       */
      // Describe this function...
      this.getTemplateKey = getTemplateKey;

      function getTemplateKey() {
        return workflowlibrary.getTemplateKey();
      }
      /**
       * Describe this function...
       */
      this.saveFormField = saveFormField;

      function saveFormField(UIObjectReference, value) {
        return new Promise(function(resolve, reject) {
          // To set the value of a specific field (addressed
          // by its UIObjRef) in the current form.
          // Block#: 6YLSaPo0ukG(,4oLhZ(^
          workflowlibrary.setFieldByRef(UIObjectReference, value).then(response => {;
          });
        });
      }
      /**
       * To retrieve all data coming from a specific field
       * (addressed by its UIObjRef) in the current form.
       */
      this.getFormField = getFormField;

      function getFormField(UIObjectReference) {
        // To retrieve all data coming from a specific field (addressed by its UIObjRef) in the current form.
        // Block#: 4`XwV}#QpE5V/#v`$Q`C
        LibVars.snapclinicallogiccomponent.FormFieldRef = workflowlibrary.findFieldByRef(UIObjectReference);
        // Block#: vFO_$v5`A{YBV9#37O^A
        if(!(com.fc.JavaScriptDistLib.Dictionary.getKeys(LibVars.snapclinicallogiccomponent.FormFieldRef)).length) {
          return '';
        }
        // To retrieve the value of a specific field (addressed by its UIObjRef) in the current form
        // Block#: T@VF{Cir;pop_SmWghO:
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.snapclinicallogiccomponent.FormFieldRef, 'type'), "EQUAL", 'expression')) {
          return workflowlibrary.findFieldValueByRef(UIObjectReference);
        }
        return LibVars.snapclinicallogiccomponent.FormFieldRef;
      }
      /**
       * To manage all the actions needed when the flow is ended
       */
      this.onFlowCompletion = onFlowCompletion;

      function onFlowCompletion() {
        return new Promise(function(resolve, reject) {
          com.fc.JavaScriptDistLib.EventListeners.invoke("onFlowCompletion", "f96bb5h8a9", []);
        });
      }
      /**
       * To get the current ScreenName
       */
      // Describe this function...
      this.getCheckBoxes = getCheckBoxes;

      function getCheckBoxes() {
        return workflowlibrary.getCheckBoxFields();
      }
      /**
       * Describe this function...
       */
      this.saveCheckBoxesForm = saveCheckBoxesForm;

      function saveCheckBoxesForm(checkBoxValues) {
        return new Promise(function(resolve, reject) {
          // Describe this function...
          // Block#: CF02e7ah@P@xRqi+N`|:
          workflowlibrary.setCheckBoxFields(checkBoxValues).then(response => {;
          });
        });
      }
      /**
       * To get the current ScreenName
       */
      // Describe this function...
      this.getFormProperties = getFormProperties;

      function getFormProperties() {
        return workflowlibrary.getFormProperties();
      }
      /**
       * To check if exists an outcome with the specified ID...
       */
      // Describe this function...
      this.getFormProperty = getFormProperty;

      function getFormProperty(id) {
        return workflowlibrary.getFormProperty(id);
      }
      /**
       * To check if exists an outcome with the specified ID...
       */
      // Describe this function...
      this.getProcessVariable = getProcessVariable;

      function getProcessVariable(name2) {
        return workflowlibrary.getProcessVariable(name2);
      }
      com.fc.JavaScriptDistLib.Screen.screenPopInit();
    };
    var snapclinicallogiccomponent = new snapClinicalLogicComponent();
    LibVars.eq5d5loffline.buttonClicked = null;
    com.fc.JavaScriptDistLib.EventListeners.register("onFlowCompletion", "f96bb5h8a9",
      /**
       * To manage all the actions needed when the flow is ended
       */
      function onFlowCompletion() {
        return new Promise(function(resolve, reject) {
          // Block#: x-BB4m},u-Zch9@G}B9+
          onEQ5D5LFlowComplete().then(response => {;
          });
        });
      }
    );
    /**
     * Describe this function...
     */
    this.onEQ5D5LMainInit = onEQ5D5LMainInit;

    function onEQ5D5LMainInit() {
      return new Promise(function(resolve, reject) {
        // Block#: :Zng(I*c1M!K{nmY%wg(
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LMain", false); // Block#: xHCh=`sL]M4j7W%R!U2m
        LibVars.eq5d5loffline.buttonClicked = false;
        // Describe this function...
        // Block#: a3E]xBJe9*it,q~p42Y-
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LMainText", (translatorlib.translate('Health Questionnaire English version for the UK'))); // Describe this function...
        // Block#: 0e}oqLYc`?f2U*vZSTPO
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LMainTitle", (translatorlib.translate(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("LEQ5D5LMainTitle")))); // Describe this function...
        // Block#: l9Znbj^TEmeo2U@Xtt_.
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LMainFooter", (translatorlib.translate('©&nbsp;EuroQol&nbsp;Research&nbsp;Foundation.&nbsp;EQ-5D™&nbsp;is&nbsp;a&nbsp;trade&nbsp;mark&nbsp;<br />of&nbsp;the&nbsp;EuroQol&nbsp;Research&nbsp;Foundation'))); // Describe this function...
        // Block#: {`oe}Y_cSJFCwSYM/Mo*
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LMainNext", (translatorlib.translate(snapclinicallogiccomponent.getOutcome('next')))); // Describe this function...
        // Block#: gIf/Tnk*=I;X,W^])j,J
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LMainPrev", (translatorlib.translate(snapclinicallogiccomponent.getOutcome('cancel'))));
      });
    }
    /**
     * Describe this function...
     */
    this.onEQ5D5LQuestionInit = onEQ5D5LQuestionInit;

    function onEQ5D5LQuestionInit() {
      return new Promise(function(resolve, reject) {
        // Block#: G$_8,gq,9TooR%1ud;A(
        LibVars.eq5d5loffline.buttonClicked = false;
        // Block#: +$83~fXs^Qb{C+4%79CN
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LQuestion", false); // Describe this function...
        // Block#: 2lIvGo(+bRDy54I?Py%Q
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LQuestionNotificationOK", (translatorlib.translate('OK'))); // Describe this function...
        // Block#: 9k_9hL[5^DRu*90?Gm!1
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LQuestionFooter", (translatorlib.translate('©&nbsp;EuroQol&nbsp;Research&nbsp;Foundation.&nbsp;EQ-5D™&nbsp;is&nbsp;a&nbsp;trade&nbsp;mark&nbsp;<br />of&nbsp;the&nbsp;EuroQol&nbsp;Research&nbsp;Foundation'))); // Describe this function...
        // Block#: bCm]Fw8x._P{au}=#i~5
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LQuestionPrev", (translatorlib.translate(snapclinicallogiccomponent.getOutcome('back')))); // Describe this function...
        // Block#: -p3:xcTo/f-_(]%@*])2
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LQuestionNext", (translatorlib.translate(snapclinicallogiccomponent.getOutcome('next'))));
      });
    }
    com.fc.JavaScriptDistLib.EventListeners.register("handleSettingVASValue", "i2cnq5hwzyVASInputEQ5D5LComponent",
      /**
       * Describe this function...
       */
      function handleSettingVASValue() {
        return new Promise(function(resolve, reject) {
          // Block#: v/M./=NsQNXo1!f2sJ:Y
          $('[obj-name="LEQ5D5LHMBoxValue"]').show(); // Describe this function...
          // Block#: vW)gL-%7|/q~}PTE$p!p
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMBoxValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(vasuicomponenteq5d5l_VASInputEQ5D5LComponent.getEQ5D5LVASValue())));
        });
      }
    );
    /**
     * Describe this function...
     */
    this.EQ5D5LHMdisplayNotification = EQ5D5LHMdisplayNotification;

    function EQ5D5LHMdisplayNotification() {
      return new Promise(function(resolve, reject) {
        // Block#: -0Q,5D-Kg|b_=q.I_4lB
        LibVars.eq5d5loffline.buttonClicked = true;
        // Block#: `URrdY|]6(D(wIw7`2VO
        $('[obj-name="CEQ5D5LHMOverlay"]').show(); // Block#: w(_I,W{aY:9Kp8u[^wwo
        LibVars.eq5d5loffline.buttonClicked = false;
      });
    }
    /**
     * Describe this function...
     */
    this.onEQ5D5LHMInit = onEQ5D5LHMInit;

    function onEQ5D5LHMInit() {
      return new Promise(function(resolve, reject) {
        // Block#: AbhkHtj*}2t5e-r]/nx9
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LHM", false); // Block#: -g23Cbno#-PoyCO(6#m(
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMBoxValue", ''); // Block#: w%-];=O=1P#^i,~PfBlK
        LibVars.eq5d5loffline.buttonClicked = false;
        // Describe this function...
        // Block#: 6j?JKAzW}9MWuJLnlVgf
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LHMNotificationOK", (translatorlib.translate('OK'))); // Describe this function...
        // Block#: WPmpY2e#@C9?zCQP2@R4
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMNotificationText", (translatorlib.translate('Please tap on the scale to indicate<br />how your health is TODAY'))); // Describe this function...
        // Block#: *{*TdAPRvsQQYCmNe1$$
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMBox", (translatorlib.translate(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("LEQ5D5LHMBox")))); // Describe this function...
        // Block#: C-dP3+UG?,eZR$PTOJH(
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMText3", (translatorlib.translate('The worst health you can imagine'))); // Describe this function...
        // Block#: b=vnQEqE,/NglaDO_|#5
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMText2", (translatorlib.translate('The best health  you can imagine'))); // Describe this function...
        // Block#: 0gjk^$d?e3kA},Lg=kE^
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMText", (translatorlib.translate('Please tap on thescale to indicate how your health is today.'))); // Describe this function...
        // Block#: ?}g*g#WVg+/l%2z~1[*H
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMFooter", (translatorlib.translate('©&nbsp;EuroQol&nbsp;Research&nbsp;Foundation.&nbsp;EQ-5D™&nbsp;is&nbsp;a&nbsp;trade&nbsp;mark&nbsp;<br />of&nbsp;the&nbsp;EuroQol&nbsp;Research&nbsp;Foundation'))); // Describe this function...
        // To get the outcome name by ID
        // Block#: C)0LSHg[Eu~7m9L7(6dX
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LHMPrev", (translatorlib.translate(snapclinicallogiccomponent.getOutcome('back')))); // Describe this function...
        // To get the outcome name by ID
        // Block#: w[6awn3bA4?T/e2]5Gw-
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LHMNext", (translatorlib.translate(snapclinicallogiccomponent.getOutcome('next'))));
      });
    }
    /**
     * Describe this function...
     */
    this.onEQ5D5LBasicInit = onEQ5D5LBasicInit;

    function onEQ5D5LBasicInit() {
      return new Promise(function(resolve, reject) {
        // Block#: j)H!#5=u]ht~^9ROKZy9
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LBasic", false); // Block#: OX$6/6;{cbQh_2HE;QP:
        LibVars.eq5d5loffline.buttonClicked = false;
        // Describe this function...
        // Block#: TYW.Hc]doGyCL8Vv)R6R
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LBasicFooter", (translatorlib.translate('©&nbsp;EuroQol&nbsp;Research&nbsp;Foundation.&nbsp;EQ-5D™&nbsp;is&nbsp;a&nbsp;trade&nbsp;mark&nbsp;<br />of&nbsp;the&nbsp;EuroQol&nbsp;Research&nbsp;Foundation'))); // Describe this function...
        // To retrieve all data coming from a specific field (addressed by its UIObjRef) in the current form.
        // Block#: ShCI@_h}0l{(XrBlh][o
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LBasicText", (translatorlib.translate(snapclinicallogiccomponent.getFormField('LEQ5D5LBasicText')))); // Describe this function...
        // To get the outcome name by ID
        // Block#: _Q+v).rj#jQ6uk=.JeDb
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LBasicPrev", (translatorlib.translate(snapclinicallogiccomponent.getOutcome('back')))); // Describe this function...
        // To get the outcome name by ID
        // Block#: nV[R%z*Xqi4U6fl59RGp
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LBasicNext", (translatorlib.translate(snapclinicallogiccomponent.getOutcome('next'))));
      });
    }
    /**
     * Describe this function...
     */
    this.startEQ5D5L = startEQ5D5L;

    function startEQ5D5L() {
      return new Promise(function(resolve, reject) {
        // Block#: 8RNjpt5+L~/@}cf$J%Ca
        com.fc.JavaScriptDistLib.Debug.printLog('start EQ5D5L');
        // Block#: bo#w6e!CS|L9z52=O7n1
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMBoxValue", ''); // Describe this function...
        // Block#: uB;4i0u@C@A8CtqY/6{`
        translatorlib.getTranslations().then(response => {;
          if(response.name === "then") {
            // To start a new instance of the workflow or to resume the last run of it.
            // You must specify
            // - processDefinitionKey will be your Process Identifier (text)
            // - forceStartNewInstance will be set to true if you want to start
            // a new instance or to false if you need to resume an old one.
            // Block#: G%*/W;~u+b9)wJ7pw%G1
            snapclinicallogiccomponent.startNewFlow('EQ5D5LOffline', false).then(response => {;
              if(response.name === "success") {}
              if(response.name === "failure") {}
            });
          }
          if(response.name === "catch") {}
        });
      });
    }
    /**
     * Describe this function...
     */
    this.startEQ5D5LTest = startEQ5D5LTest;

    function startEQ5D5LTest() {
      return new Promise(function(resolve, reject) {
        // Block#: rJ!G=zI@if,/hIK1iVDU
        com.fc.JavaScriptDistLib.Debug.printLog('start EQ5D5L');
        // Describe this function...
        // Block#: u1Aj)VS6@pzt7WxtJCb-
        translatorlib.getTranslations().then(response => {;
          if(response.name === "then") {
            // To start a new instance of the workflow or to resume the last run of it.
            // You must specify
            // - processDefinitionKey will be your Process Identifier (text)
            // - forceStartNewInstance will be set to true if you want to start
            // a new instance or to false if you need to resume an old one.
            // Block#: 7|Rw5y+7H1ZYF4/JDX:2
            snapclinicallogiccomponent.startNewFlow('EQ5D5L_Test', false).then(response => {;
              if(response.name === "success") {}
              if(response.name === "failure") {}
            });
          }
          if(response.name === "catch") {}
        });
      });
    }
    /**
     * Describe this function...
     */
    this.onEQ5D5LFlowComplete = onEQ5D5LFlowComplete;

    function onEQ5D5LFlowComplete() {
      return new Promise(function(resolve, reject) {
        com.fc.JavaScriptDistLib.EventListeners.invoke("onEQ5D5LFlowComplete", "wyeqrkcjg0", []);
      });
    }
    // Block#: cMO:)aB;n?207T|))B,Y
    function on_screen_showSEQ5D5LMain() {
      try {
        // Block#: qQ2X|SmbBE4@Y;?XsvZd
        com.fc.JavaScriptDistLib.Debug.printLog('EQ5D5LMain display');
        // Block#: kjZKb[npMPR?roNpE8-,
        onEQ5D5LMainInit().then(response => {;
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="SEQ5D5LMain"]').on('show', on_screen_showSEQ5D5LMain);
    com.fc.JavaScriptDistLib.Screen.screenDict['showSEQ5D5LMain'] = on_screen_showSEQ5D5LMain;
    // Block#: )f}6;|v!Dv_$F)`6H:20
    function on_BEQ5D5LMainPrev_click(e) {
      try {
        // Block#: ?z9tQ:~^kFAxG!+x=!nr
        if(!LibVars.eq5d5loffline.buttonClicked) {
          // Block#: xuTbTY|c:4p3n^2AvJCh
          LibVars.eq5d5loffline.buttonClicked = true;
          // Block#: N#MoU#edwfG/#*PDqSis
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LMain", true); // To complete the current task and get the next one if it exists.
          // You have to specify the outcome's ID (valid outcome of the current task).
          // Block#: wSRkp(WA!ELSu3ibw+e7
          snapclinicallogiccomponent.completeTask('cancel').then(response => {;
            if(response.name === "success") {}
            if(response.name === "failure") {
              // Block#: U.Q*Jf7!/dF}MI_5g/fp
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LMain", false); // Block#: j6J-[[[wh%miQQX+KAgT
              LibVars.eq5d5loffline.buttonClicked = false;
            }
          });
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LMainPrev"]').on('click', on_BEQ5D5LMainPrev_click);
    // Block#: bBA.o?yXlVVDn@cX-!:d
    let on_screen_back_button_pressSEQ5D5LMain = function() {
      try {
        // Block#: .:Y7uzp~_MI_|C0Ujg9H
        if(!LibVars.eq5d5loffline.buttonClicked) {
          // Block#: 8cP$Gt3;KGxRr0i_jkwl
          LibVars.eq5d5loffline.buttonClicked = true;
          // Block#: m|,~E4z_%3ft`_K=ngg`
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LMain", true); // To complete the current task and get the next one if it exists.
          // You have to specify the outcome's ID (valid outcome of the current task).
          // Block#: ~.1URm]E]0l-oP3Hb-y!
          snapclinicallogiccomponent.completeTask('back').then(response => {;
            if(response.name === "success") {}
            if(response.name === "failure") {
              // Block#: bogva6J8NYAF|X+zo0A$
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LMain", false); // Block#: THu;x^tKk[qGBMsAui,y
              LibVars.eq5d5loffline.buttonClicked = false;
            }
          });
        }
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    com.fc.JavaScriptDistLib.Screen.screenDict['backSEQ5D5LMain'] = on_screen_back_button_pressSEQ5D5LMain;
    // Block#: Z(:rKc=@8Mn8#~8wZ/dc
    function on_BEQ5D5LMainNext_click(e) {
      try {
        // Block#: }k,O=l4A$L)1)b^VsUHh
        if(!LibVars.eq5d5loffline.buttonClicked) {
          // Block#: =tvrYV@.pGdl%](Vy!qT
          LibVars.eq5d5loffline.buttonClicked = true;
          // Block#: 8Hb=UUI7}O/oM=C5V[:y
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LMain", true); // To complete the current task and get the next one if it exists.
          // You have to specify the outcome's ID (valid outcome of the current task).
          // Block#: $.+V@]!bb!EbQ$~8T2iG
          snapclinicallogiccomponent.completeTask('next').then(response => {;
            if(response.name === "success") {}
            if(response.name === "failure") {
              // Block#: qa`FS]OT]MhCgk}VWg5O
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LMain", false); // Block#: E[Qb-31-0ml|jU1=-}*R
              LibVars.eq5d5loffline.buttonClicked = false;
            }
          });
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LMainNext"]').on('click', on_BEQ5D5LMainNext_click);
    // Block#: aSz:w@:1i!CA_Iq=`~{n
    function on_screen_showSEQ5D5LQuestion() {
      try {
        // Block#: r2](@f}:$jLxD$7=(e]X
        try {
          $('[obj-name= "EQ5D5LRBInput"]').off('click', on_Container_EQ5D5LRBInput_CLICK);
          $('[obj-name= "EQ5D5LRBInput"]').on('click', on_Container_EQ5D5LRBInput_CLICK);
        } catch(err) {}
        // Block#: zYi$;lzIoE-`eEDNM2:i
        com.fc.JavaScriptDistLib.Debug.printLog('EQ5D5LQuestion display');
        // Block#: gSh[[I1E?K)K9!e:,=Ug
        $('[obj-name="CEQ5D5LQuestionOverlay"]').hide(); // Block#: +QVvnDydEDrmeT[p/xpV
        onEQ5D5LQuestionInit().then(response => {;
        });
        // Block#: /O:TIN=(Ey%q2=8^y8CM
        $('[obj-name="ErrorLabelSEQ5DL"]').hide(); // This will hide error message.
        // Block#: mwel{G3aw%q(^d9SEB{z
        radiobuttonsuicomponenteq5d5l_EQ5D5LRBInput.hideError().then(response => {;
        });
        // Generates the choice list for radio buttons using field from api response.
        // Describe this function...
        // To retrieve all data coming from a specific field (addressed by its UIObjRef) in the current form.
        // Block#: `-2:S;dr;o:wx)y-3E)J
        radiobuttonsuicomponenteq5d5l_EQ5D5LRBInput.setEQ5D5LRadioButtons(translatorlib.translateRadioButtons(snapclinicallogiccomponent.getFormField('EQ5D5LRBLib'))).then(response => {;
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="SEQ5D5LQuestion"]').on('show', on_screen_showSEQ5D5LQuestion);
    com.fc.JavaScriptDistLib.Screen.screenDict['showSEQ5D5LQuestion'] = on_screen_showSEQ5D5LQuestion;
    // Block#: `N%Bz8s2Wvd`!6}haBC3
    function on_BEQ5D5LQuestionPrev_click(e) {
      try {
        // Block#: VhWsv__TgU,9wzXLcSU1
        if(!LibVars.eq5d5loffline.buttonClicked) {
          // Block#: ^M)cdq9/H1TtBbq$MMUe
          LibVars.eq5d5loffline.buttonClicked = true;
          // Block#: n(Tiazb_Z+7k.MNXz8,2
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LQuestion", true); // To complete the current task and get the next one if it exists.
          // You have to specify the outcome's ID (valid outcome of the current task).
          // Block#: RkIxRkoxoi(bn2LTY@96
          snapclinicallogiccomponent.completeTask('back').then(response => {;
            if(response.name === "success") {}
            if(response.name === "failure") {
              // Block#: +=~#RFEP6u4lxbrO8I?H
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LQuestion", false); // Block#: p$y{kfpTH#wr@i*S_MSS
              LibVars.eq5d5loffline.buttonClicked = false;
            }
          });
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LQuestionPrev"]').on('click', on_BEQ5D5LQuestionPrev_click);
    // Block#: /48N_v$k29/!n6j$$0L;
    let on_screen_back_button_pressSEQ5D5LQuestion = function() {
      try {
        // Block#: yrwlCqA1LyHCUag[q1*(
        if(!LibVars.eq5d5loffline.buttonClicked) {
          // Block#: 2tvvs*`03?J_A8ok(JGg
          LibVars.eq5d5loffline.buttonClicked = true;
          // Block#: 63c-rF]*hg@B/Iq4XkgK
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LQuestion", true); // To complete the current task and get the next one if it exists.
          // You have to specify the outcome's ID (valid outcome of the current task).
          // Block#: QNJz/a9eC1#74tJ2a{c.
          snapclinicallogiccomponent.completeTask('back').then(response => {;
            if(response.name === "success") {}
            if(response.name === "failure") {
              // Block#: aGD)![cd+mR~u|Y@Sd,i
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LQuestion", false); // Block#: 0[])h12[15Jk$#~s,k;m
              LibVars.eq5d5loffline.buttonClicked = false;
            }
          });
        }
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    com.fc.JavaScriptDistLib.Screen.screenDict['backSEQ5D5LQuestion'] = on_screen_back_button_pressSEQ5D5LQuestion;
    // Block#: e_#,RA-=s[/ZP3!t].)t
    function on_BEQ5D5LQuestionNext_click(e) {
      try {
        // Block#: Q3By@~2b59a(P2~XzJQ?
        if(!LibVars.eq5d5loffline.buttonClicked) {
          // Returns the selected choice.
          // Block#: axC50Q{EHI%l;;IwbyZ^
          if(radiobuttonsuicomponenteq5d5l_EQ5D5LRBInput.hasEQ5D5LRadioButtonsValue()) {
            // Block#: zj|6quS[lu]3#3D6/wbv
            LibVars.eq5d5loffline.buttonClicked = true;
            // Block#: 8{xJ!T%rM-SX~e])?6ne
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LQuestion", true); // Describe this function...
            // Returns the selected choice.
            // Block#: [HubgQQo+wmiMv0VPXaJ
            snapclinicallogiccomponent.saveFormField('EQ5D5LRBLib', radiobuttonsuicomponenteq5d5l_EQ5D5LRBInput.getEQ5D5LRadioButtonsId()).then(response => {;
            });
            // To complete the current task and get the next one if it exists.
            // You have to specify the outcome's ID (valid outcome of the current task).
            // Block#: g1zvd{I8meXPd.JQo0Vp
            snapclinicallogiccomponent.completeTask('next').then(response => {;
              if(response.name === "success") {}
              if(response.name === "failure") {
                // Block#: yS1nT%y1ZO2/1.Q[Z+#/
                com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LQuestion", false); // Block#: }oh9zAW8vnS1|!]_aP!Q
                LibVars.eq5d5loffline.buttonClicked = false;
              }
            });
          } else {
            // Block#: _XNOGs/5!XiXO]xgmrj!
            $('[obj-name="ErrorLabelSEQ5DL"]').show(); // Describe this function...
            // Block#: 0:S!$v!E^5B_U~s1)0:p
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("ErrorLabelSEQ5DL", (translatorlib.translate('Please answer the required question(s)')));
          }
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LQuestionNext"]').on('click', on_BEQ5D5LQuestionNext_click);
    // Block#: 4U(KOsVHX)kk{y4gKQK-
    function on_BEQ5D5LQuestionNotificationOK_click(e) {
      try {
        // Block#: oIq:]d|Js/z}Bq;E8@]L
        if(!LibVars.eq5d5loffline.buttonClicked) {
          // Block#: mKJeLZ.P1n:(44WbG25q
          LibVars.eq5d5loffline.buttonClicked = true;
          // Block#: :Ivx%{tk/:G5*2(mC([k
          $('[obj-name="CEQ5D5LQuestionOverlay"]').hide(); // Block#: 85f%i^H)4l!QrNz$I[pU
          LibVars.eq5d5loffline.buttonClicked = false;
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LQuestionNotificationOK"]').on('click', on_BEQ5D5LQuestionNotificationOK_click);
    // Block#: Sj$-SXN*r[mg*O*$+N:{
    function on_BEQ5D5LQuestionNotification_click(e) {
      try {
        // Block#: -bs9iN7lHXVCLh.1Hr{n
        if(!LibVars.eq5d5loffline.buttonClicked) {
          // Block#: !6`kr!TZ5R~0xuTi]~$l
          LibVars.eq5d5loffline.buttonClicked = true;
          // Block#: /KfETKoyBK;Ga=Nb+6#)
          $('[obj-name="CEQ5D5LQuestionOverlay"]').hide(); // Block#: MT}Zh-dBrz}?$yf+$#2X
          LibVars.eq5d5loffline.buttonClicked = false;
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LQuestionNotification"]').on('click', on_BEQ5D5LQuestionNotification_click);
    // Block#: `p:b+r|]tWhjtW-c{fkk
    function on_screen_showSEQ5D5LHM() {
      try {
        // Block#: CV0kA:Aiyb.2_[u}By#F
        try {
          $('[obj-name= "VASInputEQ5D5LComponent"]').off('click', on_Container_VASInputEQ5D5LComponent_CLICK);
          $('[obj-name= "VASInputEQ5D5LComponent"]').on('click', on_Container_VASInputEQ5D5LComponent_CLICK);
        } catch(err) {}
        // Block#: kktPvEYAS1KXoTPAw|]C
        com.fc.JavaScriptDistLib.Debug.printLog('EQ5D5LHM display');
        // Block#: cBQ7!cQVIY:7rU09!u4.
        onEQ5D5LHMInit().then(response => {;
        });
        // Block#: k@mdA0B|n_|?}.iJ4+`J
        $('[obj-name="ErrorLabelCRQ5DL"]').hide(); // Describe this function...
        // Block#: BJ.ejgvoh#4POjfKD2)/
        vasuicomponenteq5d5l_VASInputEQ5D5LComponent.onVASUIComponentEQ5D5LInit().then(response => {;
        });
        // To hide Error label.
        // Block#: ~9}nJa6Hj(7QO=sY~KS[
        vasuicomponenteq5d5l_VASInputEQ5D5LComponent.hideError().then(response => {;
        });
        // Block#: `5;~sq1:/N*fNL-9nt_5
        $('[obj-name="CEQ5D5LHMOverlay"]').hide();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="SEQ5D5LHM"]').on('show', on_screen_showSEQ5D5LHM);
    com.fc.JavaScriptDistLib.Screen.screenDict['showSEQ5D5LHM'] = on_screen_showSEQ5D5LHM;
    // Block#: {ilXlsoo0gTQbJ6l?$/,
    function on_BEQ5D5LHMNext_click(e) {
      try {
        // Block#: [w9tzX~yF22B{!DO:b]v
        if(!LibVars.eq5d5loffline.buttonClicked) {
          // Describe this function...
          // Block#: WYx=@|[QtLb:#N9PU0v`
          if(vasuicomponenteq5d5l_VASInputEQ5D5LComponent.hasEQ5D5LVasValue()) {
            // Block#: ]Id}R;L2OkND-ntR+,G#
            LibVars.eq5d5loffline.buttonClicked = true;
            // Block#: -TBPXF0I%O-OcrE9?#ni
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LHM", true); // Describe this function...
            // Describe this function...
            // Block#: ?W%E-Nfx=6*?_jy%}Oms
            snapclinicallogiccomponent.saveFormField('EQ5D5LVASLib', vasuicomponenteq5d5l_VASInputEQ5D5LComponent.getEQ5D5LVASValue()).then(response => {;
            });
            // To complete the current task and get the next one if it exists.
            // You have to specify the outcome's ID (valid outcome of the current task).
            // Block#: __$O!=jrZcOvQD*|#Trl
            snapclinicallogiccomponent.completeTask('next').then(response => {;
              if(response.name === "success") {}
              if(response.name === "failure") {
                // Block#: FMp)7hfjv(HxoTaR!`0u
                com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LHM", false); // Block#: Mt.tkQyh[:vHobi.vQ0f
                LibVars.eq5d5loffline.buttonClicked = false;
              }
            });
          } else {
            // Block#: JHQ,nPCMmJ@{fiA91#H)
            $('[obj-name="ErrorLabelCRQ5DL"]').show(); // Describe this function...
            // Block#: #loqx[#04@~giGWsfoeM
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("ErrorLabelCRQ5DL", (translatorlib.translate('Please tap on the scale to indicate how your health is TODAY')));
          }
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LHMNext"]').on('click', on_BEQ5D5LHMNext_click);
    // Block#: xiS$PDySU=?}@nDd.:lX
    let on_screen_back_button_pressSEQ5D5LHM = function() {
      try {
        // Block#: zkaU4tQxMIE=y:q4LVBD
        if(!LibVars.eq5d5loffline.buttonClicked) {
          // Block#: ?g3Jf/bi:Cr7rH?6DrI3
          LibVars.eq5d5loffline.buttonClicked = true;
          // Block#: dbUi8*,nr@;j6%VTxrM[
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LHM", true); // To complete the current task and get the next one if it exists.
          // You have to specify the outcome's ID (valid outcome of the current task).
          // Block#: Wc:TmwR?[;(^yiDEY2Hz
          snapclinicallogiccomponent.completeTask('back').then(response => {;
            if(response.name === "success") {}
            if(response.name === "failure") {
              // Block#: :|Tms+7mW74yD-2`Fj_H
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LHM", false); // Block#: C8wRi|)I@N8MdQ^d@C%J
              LibVars.eq5d5loffline.buttonClicked = false;
            }
          });
        }
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    com.fc.JavaScriptDistLib.Screen.screenDict['backSEQ5D5LHM'] = on_screen_back_button_pressSEQ5D5LHM;
    // Block#: C~,@x;q8X%;g2OKsw:kt
    function on_BEQ5D5LHMPrev_click(e) {
      try {
        // Block#: p?f2MFh0m1ZyWQ?]T9zt
        if(!LibVars.eq5d5loffline.buttonClicked) {
          // Block#: CL=a{s+jKxG:DiwV%AZI
          LibVars.eq5d5loffline.buttonClicked = true;
          // Block#: aO#p[Mg[;DMOJ^o94nQt
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LHM", true); // To complete the current task and get the next one if it exists.
          // You have to specify the outcome's ID (valid outcome of the current task).
          // Block#: HjAY3|w;ZB!]^ueNUt-S
          snapclinicallogiccomponent.completeTask('back').then(response => {;
            if(response.name === "success") {}
            if(response.name === "failure") {
              // Block#: -hb9?Nw1/z2A:w2W!1/3
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LHM", false); // Block#: _qLg,#T1JC9y7Wvl$Z|)
              LibVars.eq5d5loffline.buttonClicked = false;
            }
          });
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LHMPrev"]').on('click', on_BEQ5D5LHMPrev_click);
    // Block#: Gv$.ps:EjET}le9v]4dk
    function on_BEQ5D5LHMNotification_click(e) {
      try {
        // Block#: 4R@hu@^V]J$4Ft?!5,TA
        LibVars.eq5d5loffline.buttonClicked = true;
        // Block#: ln$qaa[^a2}:e6GQ`Q3C
        $('[obj-name="CEQ5D5LHMOverlay"]').hide(); // Block#: $vyYzt~xZYpPVSi#vzZo
        LibVars.eq5d5loffline.buttonClicked = false;
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LHMNotification"]').on('click', on_BEQ5D5LHMNotification_click);
    // Block#: 4y#P:920^xF0B.%(4y~K
    function on_BEQ5D5LHMNotificationOK_click(e) {
      try {
        // Block#: XB=Ig(;,.=Ltf%B;4U=R
        LibVars.eq5d5loffline.buttonClicked = true;
        // Block#: VE7IkF0[!qsM8wHX`C4s
        $('[obj-name="CEQ5D5LHMOverlay"]').hide(); // Block#: dc9:a*3LB]b6is?o!SE=
        LibVars.eq5d5loffline.buttonClicked = false;
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LHMNotificationOK"]').on('click', on_BEQ5D5LHMNotificationOK_click);
    // Block#: F?r@T:s~JZ=*NbZK)~VV
    function on_screen_showSEQ5D5LBasic() {
      try {
        // Block#: Ik{JNK/mxW=c1RTm9646
        com.fc.JavaScriptDistLib.Debug.printLog('EQ5D5LBasic display');
        // Block#: #nIP`roJ+ObC:x+;]-?6
        onEQ5D5LBasicInit().then(response => {;
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="SEQ5D5LBasic"]').on('show', on_screen_showSEQ5D5LBasic);
    com.fc.JavaScriptDistLib.Screen.screenDict['showSEQ5D5LBasic'] = on_screen_showSEQ5D5LBasic;
    // Block#: FEO}4C.p]]B~yT3bT~v_
    function on_BEQ5D5LBasicPrev_click(e) {
      try {
        // Block#: 0uB)9#_WGPB`T@vlM?8T
        if(!LibVars.eq5d5loffline.buttonClicked) {
          // Block#: of9B@xfWT#Ui.4j,$}*-
          LibVars.eq5d5loffline.buttonClicked = true;
          // Block#: 19}mKkg(_s}T*9GPbLD=
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LBasic", true); // To complete the current task and get the next one if it exists.
          // You have to specify the outcome's ID (valid outcome of the current task).
          // Block#: }sJ3E?3{!|+BYF{U68%r
          snapclinicallogiccomponent.completeTask('back').then(response => {;
            if(response.name === "success") {}
            if(response.name === "failure") {
              // Block#: YGvz|SYuDyxu.hY8Glme
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LBasic", false); // Block#: kx5@rOr3z]~z%W,Js)d4
              LibVars.eq5d5loffline.buttonClicked = false;
            }
          });
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LBasicPrev"]').on('click', on_BEQ5D5LBasicPrev_click);
    // Block#: v#.aF]WlK0Xm)kxI_kn}
    let on_screen_back_button_pressSEQ5D5LBasic = function() {
      try {
        // Block#: xeyF}e`wbg6.Oi/Kv|CZ
        if(!LibVars.eq5d5loffline.buttonClicked) {
          // Block#: ,KKl585Z3B+[AKoVlLfu
          LibVars.eq5d5loffline.buttonClicked = true;
          // Block#: ?W0(J5~_X^avpd*UKqB_
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LBasic", true); // To complete the current task and get the next one if it exists.
          // You have to specify the outcome's ID (valid outcome of the current task).
          // Block#: 4*vfyIcKX:)KIPL2]k^o
          snapclinicallogiccomponent.completeTask('back').then(response => {;
            if(response.name === "success") {}
            if(response.name === "failure") {
              // Block#: hyNnuYP`{[SX;jIQxfb!
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LBasic", false); // Block#: tPIl#M/nN}l4J6a~|rl[
              LibVars.eq5d5loffline.buttonClicked = false;
            }
          });
        }
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    com.fc.JavaScriptDistLib.Screen.screenDict['backSEQ5D5LBasic'] = on_screen_back_button_pressSEQ5D5LBasic;
    // Block#: 7[f=Dp=MQZoy8nS},M`;
    function on_BEQ5D5LBasicNext_click(e) {
      try {
        // Block#: vrJmMPeWmEh:vLmrPU:s
        if(!LibVars.eq5d5loffline.buttonClicked) {
          // Block#: !QThANi@l-?Hsq.L,6:$
          LibVars.eq5d5loffline.buttonClicked = true;
          // Block#: t)]*5^z+8@ztD}R]]T}N
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LBasic", true); // To complete the current task and get the next one if it exists.
          // You have to specify the outcome's ID (valid outcome of the current task).
          // Block#: (3Cu77/i~BXlz86a?7-C
          snapclinicallogiccomponent.completeTask('next').then(response => {;
            if(response.name === "success") {}
            if(response.name === "failure") {
              // Block#: 9$sd+-pDB_bD!]S7]X.R
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("SEQ5D5LBasic", false); // Block#: c-?}5Il#.jIM:sIP,5;m
              LibVars.eq5d5loffline.buttonClicked = false;
            }
          });
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LBasicNext"]').on('click', on_BEQ5D5LBasicNext_click);
    com.fc.JavaScriptDistLib.Screen.screenPopInit();
  };
  var eq5d5loffline = new EQ5D5LOffline();
  // PROJECT CODE
  var _that = this;
  com.fc.JavaScriptDistLib.EventListeners.register("onEQ5D5LFlowComplete", "wyeqrkcjg0",
    /**
     * Describe this function...
     */
    function onEQ5D5LFlowComplete() {
      return new Promise(function(resolve, reject) {
        // Block#: z9#dkUQ|3PuAs4c-0zH^
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="MainDashboardScreen"]');
        showScreen.show();
        history.pushState({
          'view': 'MainDashboardScreen'
        }, 'MainDashboardScreen', '?MainDashboardScreen');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      });
    }
  );
  // Block#: Kd`F|#r!lG0zy!9s~m}=
  function on_flowLauncherBtn_click(e) {
    try {
      // Describe this function...
      // Block#: oZ!2VJP@4VD^Whd;ZF3b
      eq5d5loffline.startEQ5D5L().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="flowLauncherBtn"]').on('click', on_flowLauncherBtn_click);
  // Block#: -|T3_U!`%Uf)bF-$pj-7
  function on_screen_showSplashScreen() {
    try {
      // To setup the user name and the password to access to the
      // workflow. Start from here to interact with the workflow.
      // Block#: K19b6eO+;f%SeH$R4[3C
      snapclinicallogiccomponent.inititializeSnapClinical('lorenzo+devpatient005@foneclay.com', '111111').then(response => {;
      });
      // Describe this function...
      // Block#: M5S2ZJ%aG2~N$$|Eqspz
      snapclinicallogiccomponent.saveProcessToCache('EQ5D5LOffline').then(response => {;
        if(response.name === "then") {
          // App will check the network status, so if device is back
          // online, all offline requests will be sent to server.
          // Block#: e,nFN6.afs#~%xf;J3g@
          snapclinicallogiccomponent.startAutomaticSyncToRemote().then(response => {;
          });
          // Block#: [pd|Oj6at.{L(v`_}cWO
          com.fc.JavaScriptDistLib.Debug.printLog('********PROCESS DEFINITION RETRIEVED********');
          // Block#: n+A.L}$zJAHhU,Qb$Ovt
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="MainDashboardScreen"]');
          showScreen.show();
          history.pushState({
            'view': 'MainDashboardScreen'
          }, 'MainDashboardScreen', '?MainDashboardScreen');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        }
        if(response.name === "catch") {
          // Block#: _h{4YTfP0)$6qM?jwF%y
          com.fc.JavaScriptDistLib.Debug.printLog(response.data);
        }
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="SplashScreen"]').on('show', on_screen_showSplashScreen);
  com.fc.JavaScriptDistLib.Screen.screenDict['showSplashScreen'] = on_screen_showSplashScreen;
  com.fc.JavaScriptDistLib.Screen.screenPopInit();
  $('[obj-name="SplashScreen"]').show().triggerHandler('show');
  history.pushState({
    'view': 'SplashScreen'
  }, 'SplashScreen', '?SplashScreen');
});
// Generated by snapp
// 912080-883597-952233-683925
