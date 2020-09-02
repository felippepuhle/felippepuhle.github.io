import React from 'react'
import { Helmet } from 'react-helmet'

import Thumbnail from './assets/thumbnail.png'

import {
  url,
  defaultDescription,
  defaultTitle,
  address,
  contact,
  legalName,
  logo,
} from 'data/config'
import social from 'data/social'
const twitter = social.find(({ name }) => name === 'Twitter')

type Props = {
  title?: string
  description?: string
  location?: string
}

export const SEO: React.FC<Props> = ({
  title = defaultTitle,
  description = defaultDescription,
  location = '',
}) => {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [${social.map(({ link }) => `"${link}"`).join(', ')}]
  	}`

  return (
    <Helmet>
      <meta name='description' content={description} />
      <meta name='image' content={Thumbnail} />

      <meta property='og:url' content={`${url}${location}/?ref=smakosh.com`} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={Thumbnail} />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content={twitter.link} />
      <meta name='twitter:site' content={twitter.link} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image:src' content={Thumbnail} />
      <script type='application/ld+json'>{structuredDataOrganization}</script>
      <title>{title}</title>
      <html lang='en' dir='ltr' />
    </Helmet>
  )
}
