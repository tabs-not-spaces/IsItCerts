import Head from 'next/head'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { Box, Button } from '@dracula/dracula-ui'

export default function Home() {
  const ref = useRef([])
  const [items, setItems] = useState<any[]>([])
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
    },
    enter: [
      { opacity: 1, height: 80 },
      { transform: 'perspective(600px) rotateX(0deg)', color: '#bd93f9' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#ff79c6' }, { opacity: 0, height: 0 }],
    update: { color: '#50fa7b' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    setItems([])
    ref.current.push(
      setTimeout(() => setItems(['Is it Certificates?', ' ']), 1000),
    )
    ref.current.push(
      setTimeout(() => setItems(['Is it Certificates?', 'Hmm...', ' ']), 2000),
    )
    ref.current.push(
      setTimeout(
        () => setItems(['Is it Certificates?', "Let's check", ' ']),
        5000,
      ),
    )
    ref.current.push(
      setTimeout(
        () => setItems(['Is it Certificates?', 'Maybe its not??', ' ']),
        8000,
      ),
    )
    ref.current.push(
      setTimeout(() => setItems(['Is it Certificates?', ' ']), 10000),
    )
    ref.current.push(
      setTimeout(
        () =>
          setItems(['Is it Certificates?', "Let's check once more...", ' ']),
        12000,
      ),
    )
    ref.current.push(
      setTimeout(
        () =>
          setItems([
            "It's Certificates.",
            "It's ALWAYS",
            'Certificates.',
            <>
              <Box>
                <Button
                  variant="ghost"
                  color="purple"
                  m="sm"
                  as="a"
                  href="http://isitdns.com"
                >
                  Maybe Its DNS?
                </Button>{' '}
                <Button
                  variant="ghost"
                  color="purple"
                  m="sm"
                  as="a"
                  onClick={reset}
                >
                  Check Again?
                </Button>{' '}
                <Button
                  variant="ghost"
                  color="purple"
                  m="sm"
                  as="a"
                  href="http://intune.training"
                >
                  Intune.Training
                </Button>
              </Box>
            </>,
          ]),
        20000,
      ),
    )
  }, [])

  useEffect(() => void reset(), [])

  return (
    <div>
      <Head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YD5FQFDKCT"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YD5FQFDKCT');
        </script>
        <title>Is It Certificates?</title>
      </Head>

      <main
        className="mx-auto h-screen overflow-visible m-0 p-0 relative w-full flex justify-center items-center max-w-xs flex-col"
        style={{ maxWidth: '850px' }}
      >
        {transitions.map(({ item, props: rest, key }) => (
          <animated.div
            className="overflow-visible w-full flex justify-start align-center text-4xl lg:text-6xl font-extrabold uppercase whitespace-no-wrap"
            key={key}
            style={{ ...rest, willChange: 'transform opacity height' }}
          >
            <animated.div style={{ overflow: 'visible', height: '80px' }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
        <div></div>
      </main>
    </div>
  )
}
