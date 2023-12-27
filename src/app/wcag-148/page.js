'use client'

import { useState, useEffect } from 'react';
import HomeButton from '@/_components/HomeButton'
import Button from './_components/Button'
import DualButton from './_components/DualButton';
import s from './page.module.css'
import { Inter } from 'next/font/google'
import { MdOutlineTextIncrease, MdOutlineTextDecrease, MdFormatLineSpacing } from "react-icons/md";
 
const inter = Inter({ subsets: ['latin'] })

// const mystyle = {
//     color: "white",
//     backgroundColor: "DodgerBlue",
//     padding: "10px",
//     fontFamily: "Arial"
//   };
//   return (
//     <div>
//     <h1 style={mystyle}>Hello Style!</h1>
//     <p>Add a little style!</p>
//     </div>

export default function Page() {
    const [fontSize, setFontSize] = useState(1)
    const [lineHeight, setLineHeight] = useState(150)
    const contentStyling = {
        fontSize: `${fontSize}rem`,
        lineHeight: `${lineHeight}%`
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 768) {
                setFontSize(1.125)
                setLineHeight(160)
            }
            else if (window.innerWidth >= 1200) {
                setFontSize(1.25)
                setLineHeight(165)
            }
            else {
                setFontSize(1)
                setLineHeight(150)
            }
        }
    },[window.innerWidth])

    const increaseFontSize = () => {
        if (fontSize < 2) {
            setFontSize(prev => prev + 0.125)
        }
    }

    const decreaseFontSize = () => {
        if (fontSize > 0.5) {
            setFontSize(prev => prev - 0.125)
        }
    }

    const increaseLineHeight = () => {
        if (lineHeight < 220) {
            setLineHeight(prev => prev + 10)
        }
    }

    const decreaseLineHeight = () => {
        if (lineHeight > 100) {
            setLineHeight(prev => prev - 10)
        }
    }

    return (
        <main className={`${inter.className} ${s.main}`}>
            <nav className={s.navSection}>
                <span>Understanding SC 1.4.8:</span>
                <h1>Visual Presentation (Level AAA)</h1>
            </nav>
            <section className={s.controls}>
                <Button onClick={increaseFontSize}><MdOutlineTextIncrease/></Button>
                <Button onClick={decreaseFontSize}><MdOutlineTextDecrease/></Button>
                <DualButton plus onClick={increaseLineHeight}><MdFormatLineSpacing /></DualButton>
                <DualButton minus onClick={decreaseLineHeight}><MdFormatLineSpacing /></DualButton>
            </section>
            <section className={s.content}>
                <p style={contentStyling}>
                The intent of this Success Criterion is to ensure that visually rendered text is presented in such a manner that it can be perceived without its layout interfering with its readability. People with some cognitive, language and learning disabilities and some low vision users cannot perceive the text and/or lose their reading place if the text is presented in a manner that is difficult for them to read.
                People with some visual or cognitive disabilities need to be able to select the color of text and the color of the background. They sometimes choose combinations that seem unintuitive to someone without that disability. Sometimes these combinations have very low contrast. Sometimes only very specific color combinations work for them. Control of color or other aspects of text presentation makes a huge difference to their comprehension.
                <br/><br/>
                For people with some reading or vision disabilities, long lines of text can become a significant barrier. They have trouble keeping their place and following the flow of text. Having a narrow block of text makes it easier for them to continue on to the next line in a block. Lines should not exceed 80 characters or glyphs (40 if CJK), where glyphs are the element of writing in the writing system for the text. Studies have shown that Chinese, Japanese and Korean (CJK) characters are approximately twice as wide as non-CJK characters when both types of characters are displayed with characteristics that achieve the same readability, so the maximum line width for CJK characters is half that of non-CJK characters.
                People with some cognitive disabilities find it difficult to track text where the lines are close together. Providing extra space between lines and paragraphs allows them to better track the next line and to recognize when they have reached the end of a paragraph. It is best if there are several different options, for instance, space-and-a-half and double spacing for line spacing. By space and a half within paragraphs we mean that top of one line is 150% further from the top of the line below it than would be true when the text is 'single spaced' (the default spacing for the font). By Paragraph spacing that is 1.5 times larger than the line spacing we mean that the spacing from the top of the last line of 1 paragraph is 250% farther from the Top of the first line of the next paragraph (i.e., that there is a blank line between the two paragraphs that is 150% of the single space blank line).
                <br/><br/>
                People with certain cognitive disabilities have problems reading text that is both left and right justified. The uneven spacing between words in fully justified text can cause "rivers of white" space to run down the page making reading difficult and in some cases impossible. Text justification can also cause words to be spaced closely together, so that it is difficult for them to locate word boundaries.
                The resizing provision ensures that visually rendered text (text characters that have been displayed so that they can be seen [vs. text characters that are still in data form such as ASCII]) can be scaled successfully without requiring that the user scroll left and right to see all of the content. When the content has been authored so that this is possible, the content is said to reflow. This permits people with low vision and people with cognitive disabilities to increase the size of the text without becoming disoriented.
                <br/><br/>
                The scaling of content is primarily a user agent responsibility. User agents that satisfy UAAG 1.0 Checkpoint 4.1 allow users to configure text scale. The author's responsibility is to create Web content that does not prevent the user agent from scaling the content and that allows the reflow of the content within the current width of the viewport. See 1.4.4: Resize Text for additional discussion of resizing text.
                The horizontal scrolling requirement is not intended to apply to small-screen devices where long words may be displayed on a single line and require users to scroll horizontally. For the purposes of this requirement, authors should ensure that content meets this requirement on standard desktop/laptop displays with the browser window maximized. Since people generally keep their computers for several years, it is best not to rely on the latest desktop/laptop display resolutions but to consider the common desktop/laptop display resolutions over the course of several years when making this evaluation.
                <br/><br/>
                Wrapping should always be possible as long as words are not so long that a single word is more than half the width of a full screen. Very long URIs may run off the side of an enlarged screen, but they would not be considered text for "reading" and, therefore, would not violate this provision.
                This provision does not mean that a user would never need to use horizontal scrolling. It only means that they would not need to use horizontal scrolling back and forth to read a line of text. For example, if a page consisted of two equal sized columns of text, it would automatically meet this provision. Enlarging the page would mean that the first column was completely on screen and the user could just scroll vertically down the page to read it. To read the second column, they would horizontally scroll to the right, where the right hand column would then fit entirely within the width of the screen, and read that column without further horizontal scrolling.
                </p>
            </section>
            <HomeButton top/>
        </main>
    )
}