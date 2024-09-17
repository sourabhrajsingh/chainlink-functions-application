//SPDX-License-Identifier:MIT

pragma solidity 0.8.19;

import {Script} from "lib/forge-std/src/Script.sol";
import {FunctionsConsumerExample} from "src/FunctionsConsumer.sol";
import {console} from "lib/forge-std/src/console.sol";

contract DeployFunctionsConsumer is Script {
    function run() external {
        vm.startBroadcast();

        FunctionsConsumerExample functionConsumerExample = new FunctionsConsumerExample(
                0x234a5fb5Bd614a7AA2FfAB244D603abFA0Ac5C5C
            );

        console.log(
            "MyContract deployed at:",
            address(functionConsumerExample)
        );

        vm.stopBroadcast();
    }
}
