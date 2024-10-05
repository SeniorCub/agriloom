// SPDX-License-Identifier: MIT 
import {Gateway} from "./PaymentGateWay.sol";
contract Receive is GateWay {

//TODO: implement ownable2step
// implement pausability 
// implement blacklsting  and whitelisting
// implement fee mechanism / logic 
// implement  santioning 

     constructor() {}

   

   /**@dev
 * @notice This function is called  with amount and message data to process a payment.
 * @param _amount The amount of funds sent to the contract.
 * @param _message The message sent to the contract.
 */
     function ProcessPayment( uint256 _amount)  {
     //TODO : handle message data
     //TODO: add security checks
     emit PaymentReceived(msg.sender, _amount);
     onCrossChainCall(context, zrc20, _amount, message);
}

/**@dev
 * @notice When funds are directly sent to the contract, the receive() function is called.
 * @param _amount The amount of funds sent to the contract.
 * @param _message The message sent to the contract.
 */
        receive () external payable {
//TODO: add security checks
        bytes memory message = abi.encode(msg.sender, msg.value);
        emit PaymentReceived(msg.sender, msg.value);
        onCrossChainCall(context, zrc20, _amount, message);
    }

}