import React from 'react'
import styled from 'styled-components'

import { Container } from 'components/common'
import { Email, Marker, Phone } from 'components/common/Icons'

const Wrapper = styled.div`
  background: #303030;

  @media print {
    -webkit-print-color-adjust: exact;
  }
`

const Top = styled.div`
  padding: 1.8rem 0 1.6rem;
`

const Bottom = styled.div`
  border-top: 1px solid #3f3f3f;
  border-bottom: 1px solid #3f3f3f;
  padding: 1rem 0;
`

const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media print, (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

const BottomItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.25rem 0;

  @media print, (min-width: 768px) {
    padding: 0 0.25rem;
  }
`

const BottomIcon = styled.span`
  margin-right: 8px;
  width: 16px;
  height: 16px;
`

const BottomText = styled.span`
  font-size: 13px;
  color: #a9a9a9;
  line-height: 16px;
`

export const Header = ({ children }) => (
  <Wrapper>
    <Top>{children}</Top>

    <Bottom>
      <Container maxWidth={525}>
        <BottomContent>
          <BottomItem>
            <BottomIcon>
              <Email width={16} height={16} color='#ccc' />
            </BottomIcon>
            <BottomText as='a' href='mailto:felippe.puhle@gmail.com'>
              felippe.puhle@gmail.com
            </BottomText>
          </BottomItem>

          <BottomItem>
            <BottomIcon>
              <Marker width={16} height={16} color='#ccc' />
            </BottomIcon>
            <BottomText>Brazil</BottomText>
          </BottomItem>

          <BottomItem>
            <BottomIcon>
              <Phone width={16} height={16} color='#ccc' />
            </BottomIcon>
            <BottomText as='a' href='phone:+5549988608580'>
              +55 (49) 98860-8580
            </BottomText>
          </BottomItem>
        </BottomContent>
      </Container>
    </Bottom>
  </Wrapper>
)
