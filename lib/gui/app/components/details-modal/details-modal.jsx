/*
 * Copyright 2016 resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const propTypes = require('prop-types')
const styled = require('styled-components').default
const { Provider, Button, Modal, Flex, Txt, Box } = require('rendition')

const middleEllipsis = require('./../../utils/middle-ellipsis')

const shared = require('/./../../../../../lib/shared/units')
const { colors } = require('./../../theme')

const ModalHeader = styled(Flex) `
  justify-content: space-between;
  align-items: baseline;
  font-size: 12px;
  color: ${colors.light.soft.foreground};
  font-weight: bold;
  padding: 11px 20px;
  border-bottom: 1.5px solid ${colors.light.soft.background};
`

const ModalBody = styled(Box) `
  padding: 20px;
  max-height: 250px;
  word-wrap: break-word;
  text-align: left;

  margin: -35px 15px -45px 15px;
`

const CloseButton = styled(Button) `
  font-size: 19.5px;
  font-weight: bold;
  line-height: 1
  color: ${colors.light.soft.foreground};;
  cursor: pointer;

  &:hover {
    color: ${colors.dark.background};
  }
`

class DetailsModal extends React.Component {

  renderDetails() {
    return this.props.details.map((line) =>
      <Box key={line.path} mb='10px'>
        <Txt bold color={colors.light.foreground}> {line.name} - {line.size} </Txt>
        <Txt bold color={colors.default.foreground}> {line.path} </Txt>
      </Box>
    )
  }

  render(){
    return (
      <Provider>
        <Modal
          w='400px'
          style={{padding: 0}}
          titleElement={
            <React.Fragment>
              <ModalHeader>
                <Txt>{this.props.title}</Txt>
                <CloseButton
                  plaintext
                  onClick={this.props.callback}
                >
                &times;
                </CloseButton>
              </ModalHeader>
            </React.Fragment>
          }
        >
          <ModalBody>
            {this.renderDetails()}
          </ModalBody>
        </Modal>
      </Provider>
    )
  }
}

DetailsModal.propTypes = {
  title: propTypes.string,
  details: propTypes.array,
  callback: propTypes.func
}

module.exports = DetailsModal
