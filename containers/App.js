import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as pageActions from '../actions/PageActions'
import Page from '../components/Page';
import BotList from '../components/BotList';
import DialogueList from '../components/DialogueList';
import Chat from '../components/Chat';
import Modal from '../components/Modal';
import Note from '../components/Note';


class App extends Component {

  constructor(props) {
    super(props);
    props.pageActions.getBotList();


    // Operations usually carried out in componentWillMount go here
  }


  render() {
    const { botList, currentHoverBot, currentBot, currentDialogues, currentChatId, currentMessage} = this.props.page;
    console.log(currentMessage)
    const { setYear, getBotList, mouseOverBotCard, clickBotCard, chooseChat, chooseMessage, onChangeText, done} = this.props.pageActions;
    return(
	    <div className="ui grid container">
        <div className="two wide column">
          <BotList botList={botList} currentBot={currentBot} currentHoverBot={currentHoverBot} mouseOverBotCard={mouseOverBotCard} clickBotCard={clickBotCard}/>
        </div>
        <div className="four wide column">
          <DialogueList currentDialogues={currentDialogues} currentChatId={currentChatId} chooseChat={chooseChat}/>
        </div>
        <div className="six wide column">
          <Chat currentChatId={currentChatId} currentDialogues={currentDialogues} chooseMessage={chooseMessage} currentMessage={currentMessage}/>
        </div>
      <div className="four wide column">
        <Note onChangeText={onChangeText} currentBot={currentBot} currentMessage={currentMessage} done={done}/>
      </div>
      {/*<Modal />*/}
	    </div>
	   )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)