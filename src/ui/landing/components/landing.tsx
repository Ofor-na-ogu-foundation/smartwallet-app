import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Button } from 'react-native-material-ui'
import { Block, Container, CenteredText } from 'src/ui/structure'
import { JolocomTheme } from 'src/styles/jolocom-theme'
import { ReactNode } from 'react'
import { Landing00 } from 'src/resources'

const Carousel = require('react-native-snap-carousel').default
const Pagination = require('react-native-snap-carousel').Pagination

interface State {
  activeSlide: number;
}

interface Props {
  handleButtonTap: () => void;
}

interface Slide {
  svgImage: ReactNode;
  title: string;
  infoText: string;
}

const viewWidth: number = Dimensions.get('window').width

// TODO LINE HEIGHT
// TODO No 45% margin for centereing
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: JolocomTheme.primaryColorBlack,
  },
  svgContainer: {
    marginTop: '10%',
    marginLeft: '45%',
    backgroundColor: JolocomTheme.primaryColorBlack
  },
  carouselTextContainer: {
    paddingRight: '10%',
    paddingLeft: '10%',
    flex: 0.6,
    backgroundColor: JolocomTheme.primaryColorBlack
  },
  activeDotStyle: {
    width: 8,
    height: 8,
    backgroundColor: JolocomTheme.dotColorActive
  },
  inactiveDotStyle: {
    width: 4,
    height: 4,
    opacity: 0.6,
    backgroundColor: JolocomTheme.dotColorInactive
  },
  header: {
    color: JolocomTheme.primaryColorSand,
    fontFamily: JolocomTheme.contentFontFamily, 
    fontSize: JolocomTheme.landingHeaderFontSize,
    fontWeight: '100'
  },
  subHeader: {
    fontWeight: '100',
    color: JolocomTheme.primaryColorSand,
    fontFamily: JolocomTheme.contentFontFamily, 
    opacity: 0.8,
    fontSize: JolocomTheme.labelFontSize,
    lineHeight: JolocomTheme.labelFontSize + 4
  },
  paginationBlock: {
    flex: 0.2,
    backgroundColor: JolocomTheme.primaryColorBlack
  },
  buttonBlock: {
    flex: 0.1,
    backgroundColor: JolocomTheme.primaryColorBlack
  },
  buttonContainer: {
    height: '100%',
    width: '50%',
    borderRadius: 4,
    backgroundColor: JolocomTheme.primaryColorPurple
  },
  buttonText: {
    fontFamily: JolocomTheme.contentFontFamily,
    color: JolocomTheme.primaryColorWhite,
    fontSize: JolocomTheme.headerFontSize,
    fontWeight: '100'
  }
})

const carouselInfo: Slide[] = [
  {
    svgImage: <Landing00 height={'100%'} width={'100%'} />,
    title: 'Meet Jolocom Wallet',
    infoText: 'It will help you to take back ownership of your digital self and control the usage of your private data when signing into services.'
  },
  {
    svgImage: <Landing00 height={'100%'} width={'100%'} />,
    title: 'Feature 1',
    infoText: 'Your (personal) ... one sentence pitch to wrap the main value'
  },
  {
    svgImage: <Landing00 height={'100%'} width={'100%'} />,
    title: 'Feature 2',
    infoText: 'Your (personal) ... one sentence pitch to wrap the main value'
  },
  {
    svgImage: <Landing00 height={'100%'} width={'100%'} />,
    title: 'Feature 3',
    infoText: 'Your (personal) ... one sentence pitch to wrap the main value'
  }
]

export class LandingComponent extends React.Component<Props, State> {
  state = {
    activeSlide: 0
  }

  private renderItem = ({ item } : { item : Slide }) => {
    const { svgImage, title, infoText  } = item
    return (
      <Block>
        <Block style={ styles.svgContainer }>
        {svgImage}
        </Block>
        <Block style={ styles.carouselTextContainer } >
          <Block flex={0.4}>
            <CenteredText style= { styles.header } msg={ title } />
          </Block>
          <Block flex={0.6}>
            <CenteredText style={ styles.subHeader } msg={ infoText } />
          </Block>
        </Block>
      </Block>
    )
  }

  private renderPagination () {
    const { activeSlide } = this.state
    return (
      <Pagination
        dotsLength={ carouselInfo.length }
        activeDotIndex={ activeSlide }
        dotStyle={ styles.activeDotStyle }
        inactiveDotStyle={ styles.inactiveDotStyle }
        inactiveDotOpacity={ 0.4 }
        inactiveDotScale={ 0.6 }
      />
    )
  }
 
  render() {
    return (
      <Container style={ styles.mainContainer }>
        <Block>
          <Carousel
            data={ carouselInfo }
            renderItem={ this.renderItem }
            lockScrollWhileSnapping
            lockScrollTimeoutDuration={1000}
            loop
            sliderWidth={ viewWidth }
            itemWidth={ viewWidth }
            layout={ 'default' }
            onSnapToItem={(index : number) =>
              this.setState({ activeSlide: index })
            }
          />
        </Block>
        <Block style={ styles.paginationBlock}>
          { this.renderPagination() }
        </Block>
        <Block style={ styles.buttonBlock}>
          <Button
            raised
            onPress={ this.props.handleButtonTap }
            style={{ 
              container: styles.buttonContainer, 
              text: styles.buttonText 
            }}
            upperCase= { false }
            text='Get started'
          />
        </Block>
      </Container>
    )
  }
}