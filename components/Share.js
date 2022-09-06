/* eslint-disable @next/next/no-img-element */
import { storyblokEditable } from "@storyblok/react"

import styles from "../styles/Share.module.css"
import shared_styles from "../styles/Event.module.css"

const Share = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className={styles.section}>
      <h3 className={shared_styles.tiny_heading}>{blok.title}</h3>

      <div className={styles.icons_wrapper}>

        <a
          className={styles.item}
          href={blok.facebook.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="facebook icon" src="https://a.storyblok.com/f/173422/x/a6d07d551d/facebook.svg" />
        </a>

        <a
          className={styles.item}
          href={blok.linkedin.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="linkedin icon" src="https://a.storyblok.com/f/173422/x/cee2055b08/linkedin.svg" />
        </a>

        <a
          className={styles.item}
          href={blok.twitter.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="twitter icon" src="https://a.storyblok.com/f/173422/x/12a4ab6a1b/twitter.svg" />
        </a>

        {blok.copy_url &&
          <button onClick={() => navigator.clipboard.writeText(window.location.href)}>
            <img alt="link icon" src="https://a.storyblok.com/f/173422/x/5016188e16/link.svg" />
            <span className={styles.tooltip}>{blok.copy_url_tooltip}</span>
          </button>
        }
      </div>

    </div>
  )
}

export default Share