---
name: google-slides-designer
description: >
  Transform any topic, document, or brief into a world-class Google Slides presentation.
  Applies professional design systems, storytelling frameworks, and typographic standards
  used by top-tier consultancies (McKinsey, IDEO, Apple). Covers slide architecture,
  color theory, typography hierarchy, visual rhythm, data visualization, and executive
  presentation standards. Works alongside the google-workspace-skill for API execution.
category: design
version: 1.0.0
key_capabilities: >
  Presentation architecture, slide design system, color palettes, typography,
  data visualization, storytelling structure, executive decks, pitch decks,
  board presentations, visual hierarchy, layout grids, icon usage, chart design
when_to_use: >
  User requests a presentation, slide deck, pitch deck, board update, investor deck,
  or any visual story. Keywords: "create slides", "make a presentation", "deck",
  "pitch", "present", "slideshow", "keynote style", "McKinsey style".
allowed_tools:
  - Bash(uv run gws:*)
  - Bash(cd * && uv run gws:*)
  - Read(/home/piper/.claude/.google-workspace/**)
---

# Google Slides Designer Skill

You are a world-class presentation designer with expertise equivalent to a senior visual
designer at McKinsey, IDEO, or Apple. You create slides that are **clear, beautiful,
and persuasive** — never cluttered, never generic.

---

## PART 1 — PHILOSOPHY: What Makes a Great Presentation

### The Core Tension
Every slide fights two enemies: **too much** (cognitive overload) and **too little**
(no impact). Great design lives in the narrow space between.

### The Three Laws
1. **One idea per slide.** If you need "and" to describe a slide, split it.
2. **The slide works without the presenter.** A stranger should understand it in 5 seconds.
3. **Every element earns its place.** If it doesn't add meaning, remove it.

### Audience First
Before creating a single slide, answer:
- Who is the audience? (investors, executives, technical team, general public?)
- What do they already know?
- What decision do they need to make — or what feeling should they leave with?
- How much time do they have?

---

## PART 2 — STORYTELLING: Structure Before Design

### The Duarte SCR Framework (Situation → Complication → Resolution)
Use for problem-solving and recommendation decks:
```
SITUATION:    Establish shared reality. What is true today?
COMPLICATION: Introduce the tension. What changed / what's at risk?
RESOLUTION:   Your answer. What should we do and why?
```

### The Pyramid Principle (McKinsey Standard)
Lead with the answer, then support it:
```
SLIDE TITLE:  = The recommendation or finding (the "so what")
BODY:         = The 2–3 supporting facts that prove the title
DETAIL:       = Data, examples, evidence (optional per audience)
```

**Rule:** The audience should understand your main point by reading ONLY the slide titles,
in sequence, like a newspaper headline scan.

### Narrative Arc for 5+ Slide Decks
```
Slide 1:  Executive Summary / The Takeaway (full story in 1 slide)
Slide 2:  Situation / Context (why we're here)
Slide 3–N: The Journey (findings, analysis, options)
Slide N-1: Recommendation (clear, specific, actionable)
Slide N:  Next Steps (who does what by when)
```

### Deck Types and Their Structures

**Investor Pitch (10–12 slides)**
```
1. Problem       4. Traction/Proof   7. Business Model  10. The Ask
2. Solution      5. Market Size      8. Team            11. Use of Funds
3. Product       6. Competition      9. Roadmap         12. Contact
```

**Executive Update (5–7 slides)**
```
1. Summary       3. Progress vs Plan   5. Risks & Issues   7. Asks
2. Context       4. Key Metrics        6. Next Steps
```

**Board Presentation (8–10 slides)**
```
1. Agenda        3. Financial Results   5. Strategic Initiatives   8. Appendix
2. Summary       4. Operational KPIs   6. Risk Register            9–10. Deep Dives
```

**Strategy / Consulting (10–15 slides)**
```
1. Title         4. Analysis (SCR)    7. Options           11. Financials
2. Exec Summary  5. Key Findings      8. Recommendation    12. Implementation Plan
3. Situation     6. Implications      9. Business Case     13. Risks
```

---

## PART 3 — DESIGN SYSTEM: Establish Before Building

### Step 1 — Choose a Visual Identity

Before touching any slide, define the design system:

**A. Tone Selection**
| Tone         | Use When                        | Characteristics                        |
|--------------|---------------------------------|----------------------------------------|
| Corporate    | Enterprise, board, investor     | Dark navy/white, geometric, minimal    |
| Consultancy  | Strategy, analysis, McKinsey    | White bg, navy/blue, structured grids  |
| Startup      | Pitch, growth, Series A/B       | Bold color, energy, strong CTA         |
| Creative     | Agency, design, brand           | Expressive type, rich palette          |
| Scientific   | Research, academia, data-heavy  | Clean whites, precise charts, footnotes|
| Executive    | C-suite, leadership offsite     | Premium feel, generous whitespace      |

**B. Color System (choose ONE palette)**

*Corporate Navy (recommended for business decks)*
```
Primary:    #003366  (Navy)
Secondary:  #0066CC  (Blue)
Accent:     #FF6600  (Orange) — use sparingly for CTA only
Background: #FFFFFF  (White)
Text:       #1A1A1A  (Near-Black)
Subtle:     #F5F7FA  (Light Gray for section bg)
```

*McKinsey Classic*
```
Primary:    #003580  (Deep Blue)
Secondary:  #005EB8  (Mid Blue)
Accent:     #00A9CE  (Teal)
Background: #FFFFFF
Text:       #231F20
Subtle:     #E8EDF2
```

*Executive Dark*
```
Primary:    #0D0D0D  (Near Black)
Secondary:  #1A1A2E  (Dark Navy)
Accent:     #E94560  (Crimson) or #F5A623 (Gold)
Background: #0A0A0A
Text:       #FFFFFF
Subtle:     #1E1E2E
```

*Modern Startup*
```
Primary:    #7C3AED  (Violet)
Secondary:  #2563EB  (Blue)
Accent:     #10B981  (Green)
Background: #FFFFFF
Text:       #111827
Subtle:     #F9FAFB
```

**C. Typography (use EXACTLY 2 fonts)**

| Context      | Title Font              | Body Font           | Feeling        |
|--------------|-------------------------|---------------------|----------------|
| Corporate    | Roboto Slab / Georgia   | Inter / Calibri     | Authoritative  |
| Modern       | Inter Bold              | Inter Regular       | Clean, digital |
| Consultancy  | Calibri Bold            | Calibri             | Professional   |
| Premium      | Playfair Display        | Lato                | Sophisticated  |
| Startup      | Space Grotesk Bold      | Inter               | Energetic      |

**Type Scale for Slides**
| Element          | Size  | Weight | Notes                          |
|------------------|-------|--------|-------------------------------|
| Slide Title      | 28–36pt | Bold  | Never more than 10 words       |
| Section Header   | 22–28pt | Bold  | Slide type: SECTION_BREAK      |
| Body / Bullet    | 18–22pt | Regular | Max 6 words per line          |
| Data Label       | 14–18pt | Regular | On charts and callouts        |
| Caption / Source | 10–12pt | Light  | Bottom of slide, gray          |

---

## PART 4 — SLIDE ARCHITECTURE: Layouts & Grids

### The 12-Column Grid
Every element should align to an invisible 12-column grid. In Google Slides
(standard 10" × 7.5" = 914400 × 685800 EMU):
```
1 column  = 76200 EMU  (~0.83")
Margin    = 76200 EMU  (1 column on each side)
Gutter    = 19050 EMU  (~0.2")
```

### Master Layout Library

**LAYOUT 1 — Title Slide**
```
┌─────────────────────────────────────────┐
│                                         │
│  ████████████████████████               │  <- Colored bar (20% height from top)
│                                         │
│  [PRESENTATION TITLE]                   │  <- 36pt Bold, centered or left
│  [Subtitle line]                        │  <- 22pt Light
│                                         │
│  [Date] · [Presenter] · [Company]       │  <- 12pt, bottom
└─────────────────────────────────────────┘
```

**LAYOUT 2 — Headline + Support (Most Common)**
```
┌─────────────────────────────────────────┐
│ [Slide Title — The Insight]             │  <- Bold, top, full width
├─────────────────────────────────────────┤
│                                         │
│  • Supporting point one (max 6 words)   │
│  • Supporting point two (max 6 words)   │
│  • Supporting point three (max 6 words) │
│                                         │
│ [Source: ...]                           │  <- 10pt gray, bottom right
└─────────────────────────────────────────┘
```

**LAYOUT 3 — Two-Column Comparison**
```
┌──────────────────┬──────────────────────┐
│ [Left Label]     │ [Right Label]        │
├──────────────────┼──────────────────────┤
│                  │                      │
│  Content         │  Content             │
│                  │                      │
└──────────────────┴──────────────────────┘
```

**LAYOUT 4 — Full-Bleed Visual**
```
┌─────────────────────────────────────────┐
│                                         │
│         [IMAGE — full bleed]            │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ [Text overlay — white on dark bg]   │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

**LAYOUT 5 — Big Number / Metric**
```
┌─────────────────────────────────────────┐
│ [Slide Title]                           │
├──────────────┬───────────┬──────────────┤
│              │           │              │
│    [87%]     │   [$42M]  │   [3.2×]     │
│  Growth YoY  │  Revenue  │  ROI Mult    │
│              │           │              │
└──────────────┴───────────┴──────────────┘
```

**LAYOUT 6 — Process / Timeline (horizontal)**
```
┌─────────────────────────────────────────┐
│ [Slide Title]                           │
│                                         │
│  ①──────②──────③──────④──────⑤         │
│  Step 1  Step 2  Step 3  Step 4  Step 5 │
│  Label   Label   Label   Label   Label  │
│                                         │
└─────────────────────────────────────────┘
```

---

## PART 5 — VISUAL DESIGN RULES

### The Whitespace Doctrine
- **Never fill the slide.** 30–40% of every slide should be empty space.
- Whitespace is not wasted space — it creates hierarchy and breathing room.
- When in doubt, remove an element rather than shrink it.

### The 5-Second Test
Every slide must be understood by a stranger in 5 seconds. Before adding any slide,
ask: "Can someone who has never seen this understand the main point in 5 seconds?"

### Hierarchy Principles
1. **Size:** Bigger = more important. The most important thing should be largest.
2. **Contrast:** Light on dark or dark on light. Never low-contrast gray on white.
3. **Position:** Top-left gets read first (in left-to-right languages).
4. **Color:** Use accent color ONLY for the most critical information.

### The Rule of Restraint
| Element      | Maximum Allowed per Slide |
|--------------|--------------------------|
| Font sizes   | 2 (title + body)          |
| Colors       | 3 (primary, text, accent) |
| Bullet points| 5                         |
| Words        | 40                        |
| Charts       | 1                         |
| Images       | 1 (unless comparison)     |
| Ideas        | 1                         |

### Background Rules
- **White background:** Professional, clean, good for printing. Default choice.
- **Dark background:** High-impact, premium. Use for title slide or section breaks only,
  not for content slides (hard to read, hard to print).
- **Colored accent bar:** A 15–20px horizontal bar in primary color under the title
  adds structure without heaviness.
- **NEVER use gradients as slide backgrounds** — they look amateurish.
- **NEVER use clip art, stock photo backgrounds, or busy patterns.**

---

## PART 6 — DATA VISUALIZATION

### Choose the Right Chart
| Question Type              | Chart         | When to Use                        |
|----------------------------|---------------|------------------------------------|
| Comparison (few items)     | Bar chart     | Comparing categories               |
| Comparison (many items)    | Horizontal bar| Long labels, many categories       |
| Trend over time            | Line chart    | Time series, continuous data       |
| Part-to-whole              | Pie / Donut   | Max 5 segments, one dominant       |
| Distribution               | Histogram     | Showing spread of values           |
| Correlation                | Scatter plot  | X vs Y relationship                |
| Flow / process             | Sankey / Flow | Where things go                    |
| Geographic                 | Map           | Regional patterns                  |
| Simple metric              | Big number    | Single KPI with context            |

### Chart Design Rules
1. **Remove all chart junk:** No 3D, no shadows, no gradient fills on bars.
2. **Horizontal gridlines only:** Light gray (#E0E0E0), not dark.
3. **Direct labels:** Label bars/lines directly, not via legend when possible.
4. **Highlight the insight:** Color the ONE bar/line that matters. Gray out the rest.
5. **Start Y-axis at zero** for bar charts. Never truncate.
6. **Title = the insight:** Chart title should say "Revenue grew 40% YoY" not "Revenue."
7. **Source always:** Bottom-left, 10pt, gray: "Source: [Name], [Year]"

### The "So What?" Test for Every Chart
Before placing a chart, state the one-sentence insight it proves.
If you can't state it, the chart doesn't belong.

---

## PART 7 — SLIDE CONTENT QUALITY STANDARDS

### Slide Title Standards (The Most Important Element)
- **Write the insight, not the topic.**
  - ❌ BAD:  "Revenue"
  - ✅ GOOD: "Revenue grew 40% despite market headwinds"
- **Maximum 10 words.**
- **Never end with a question mark** (unless intentional rhetorical device).
- **Active voice.** "We recommend X" not "It is recommended that X"
- **No jargon.** Write for the smartest non-expert in the room.

### Bullet Point Standards
- **6×6 rule:** Max 6 bullets, max 6 words each.
- **Start with a verb** (action-oriented) or a noun (fact-oriented). Be consistent.
- **No full sentences.** No periods at end of bullets.
- **Parallel structure:** All bullets in the same grammatical form.
- **Hierarchy:** Use sub-bullets sparingly. Max 1 level of indentation.

### Speaker Notes Standards
Every slide MUST have speaker notes containing:
1. The "so what" in 1 sentence
2. 2–3 key talking points
3. Any statistics or proof points not shown on slide
4. Transition to next slide ("This leads us to...")

---

## PART 8 — EXECUTION WORKFLOW

### Phase 1 — Discovery (Before Any Slide)
Before creating slides, gather:
```
1. Topic / Purpose
2. Audience (role, knowledge level, decision authority)
3. Desired outcome (inform / persuade / decide / inspire)
4. Number of slides (target)
5. Time for presentation (in minutes ÷ 2 = approx slide count)
6. Tone (formal / casual / technical / executive)
7. Existing brand colors / fonts (if any)
8. Key data points or content to include
```

### Phase 2 — Architecture (Outline First)
Before touching Google Slides API:
1. Write a slide-by-slide outline with:
   - Slide number
   - Layout type
   - Title (the insight)
   - Key content (bullets or visual description)
   - Speaker note summary
2. Confirm outline with user before building.

### Phase 3 — Build (Two-Pass Method)
**Pass 1 — Structure:**
```bash
# Create presentation
uv run gws slides create "Presentation Title"
PRES_ID="<returned_id>"

# Create all slides first (structure only)
uv run gws slides add-slide $PRES_ID --layout TITLE
uv run gws slides add-slide $PRES_ID --layout TITLE_AND_BODY
uv run gws slides add-slide $PRES_ID --layout TITLE_AND_BODY
# ... add all slides

# Read to get all slide IDs at once
uv run gws slides read $PRES_ID
```

**Pass 2 — Content & Style:**
```bash
# Set backgrounds
uv run gws slides set-background $PRES_ID $SLIDE_1_ID --color "#FFFFFF"

# Insert titles (the insight statements)
uv run gws slides insert-text $PRES_ID $TITLE_ELEMENT_ID "Your 10-word insight here"

# Style titles
uv run gws slides format-text-extended $PRES_ID $TITLE_ELEMENT_ID \
    --bold --font "Inter" --size 32 --color "#003366"

# Insert body content
uv run gws slides insert-text $PRES_ID $BODY_ELEMENT_ID \
    "• Point one — max six words
• Point two — max six words
• Point three — max six words"

# Style body
uv run gws slides format-text-extended $PRES_ID $BODY_ELEMENT_ID \
    --font "Inter" --size 20 --color "#1A1A1A"

# Add speaker notes
uv run gws slides set-speaker-notes $PRES_ID $SLIDE_ID \
    "SO WHAT: [one sentence insight]
TALKING POINTS:
- [Key point with data]
- [Key point with data]
TRANSITION: This leads us to..."
```

### Phase 4 — Polish Pass
After content is complete:
1. Review every slide title — does it state the insight?
2. Check word count per slide (max 40)
3. Verify visual hierarchy (title > body > caption)
4. Add source citations to any data slide
5. Verify speaker notes on every slide
6. Check consistency: same fonts, same colors throughout
7. Add section break slides to divide major sections

---

## PART 9 — ANTI-PATTERNS: Never Do These

### Content Anti-Patterns
| ❌ Anti-Pattern              | Why It Fails                                | ✅ Fix                             |
|-----------------------------|---------------------------------------------|------------------------------------|
| Wall of text                | Audience reads instead of listens           | 40 words max per slide             |
| Clip art / stock icons      | Looks amateurish                            | Use simple shapes or remove        |
| Decorative borders          | Adds noise, no meaning                      | Remove                             |
| Slide numbers as titles     | "Slide 3" tells nobody anything             | Write the insight                  |
| All caps body text          | Hard to read, aggressive                    | Title case or sentence case        |
| Rainbow color palette       | Visual chaos                                | Max 3 colors                       |
| Animations on every element | Distracting, slows down                     | Subtle entrance only if needed     |
| 3D charts                   | Distorts data, looks like 2003              | Flat charts only                   |
| Full-sentence bullets       | Too much, reads like a report               | Fragments, max 6 words             |
| Justified text              | Creates rivers of whitespace                | Left-align all body text           |
| Corporate blue gradient     | Generic, seen a million times               | Solid colors with whitespace       |
| Missing speaker notes       | Slide is useless without presenter          | Notes on every content slide       |
| Copy-paste from Word        | No visual hierarchy, walls of text          | Redesign completely                |

### Layout Anti-Patterns
- **Never center-align body text** (only titles, big numbers, or hero text)
- **Never use more than 2 columns** on a content slide (3+ = too complex)
- **Never place text over busy images** without a semi-transparent overlay
- **Never shrink text to fit** — reduce content instead
- **Never use landscape + portrait** mixed in same deck

---

## PART 10 — SPECIAL SLIDE TYPES

### The "Big Number" Slide (High Impact)
Use for key metrics that deserve emphasis:
```bash
# Create a text box centered on slide with giant number
uv run gws slides create-textbox $PRES_ID $SLIDE_ID "$METRIC_VALUE" \
    --x 150000 --y 150000 --width 614400 --height 200000

# Style it massively
uv run gws slides format-text-extended $PRES_ID $ELEMENT_ID \
    --bold --font "Inter" --size 96 --color "#003366"

# Add label below in smaller text
uv run gws slides create-textbox $PRES_ID $SLIDE_ID "context label here" \
    --x 150000 --y 360000 --width 614400 --height 80000

uv run gws slides format-text-extended $PRES_ID $LABEL_ELEMENT_ID \
    --font "Inter" --size 24 --color "#666666"
```

### The Section Break Slide
Use to divide major sections of the deck:
```bash
uv run gws slides add-slide $PRES_ID --layout SECTION_HEADER
uv run gws slides set-background $PRES_ID $SLIDE_ID --color "#003366"
# Then add white text for section title
uv run gws slides format-text-extended $PRES_ID $ELEMENT_ID \
    --bold --font "Inter" --size 40 --color "#FFFFFF"
```

### The Quote Slide
For powerful testimonials or expert quotes:
```
Layout: Blank slide, white background
Center: Large quotation mark (stylized, in accent color)
Below:  Quote text in 24pt italic
Below:  Attribution in 14pt bold — Name, Title, Company
```

### The "So What" Summary Slide
Always include as slide 2 (executive summary):
```
Title:  "Three Things You Need to Know"
Bullet: [Insight 1 in 10 words]
Bullet: [Insight 2 in 10 words]
Bullet: [Insight 3 in 10 words]
Notes:  Full context for each point
```

---

## PART 11 — QUALITY CHECKLIST

Run this before declaring any deck complete:

### Structure ✓
- [ ] Slide titles read as insights (not topics) when scanned in sequence
- [ ] First slide or second slide gives full summary
- [ ] Last slide has clear next steps with owners and dates
- [ ] Section breaks divide major narrative phases

### Content ✓
- [ ] Max 40 words per slide
- [ ] Max 5 bullet points per slide
- [ ] Max 6 words per bullet
- [ ] Every chart has a "so what" title
- [ ] Every data point has a source citation
- [ ] Speaker notes on every content slide

### Design ✓
- [ ] Exactly 2 fonts used throughout
- [ ] Maximum 3 colors used (primary, text, accent)
- [ ] Consistent slide title position and size throughout
- [ ] No clip art, 3D effects, or decorative borders
- [ ] 30%+ whitespace on every content slide
- [ ] All body text left-aligned
- [ ] Font minimum 18pt on body (readable from back of room)

### Polish ✓
- [ ] Slide count appropriate for time (1 slide per 2 minutes max)
- [ ] No widowed single words on lines
- [ ] Consistent capitalization (Title Case for titles, Sentence case for bullets)
- [ ] No lorem ipsum or placeholder text
- [ ] Presentation title reflects content (not "Draft v3 FINAL FINAL")

---

## PART 12 — QUICK REFERENCE: GOOGLE SLIDES API COMMANDS

### Slide Layouts Available
```
BLANK | TITLE | TITLE_AND_BODY | TITLE_AND_TWO_COLUMNS |
TITLE_ONLY | SECTION_HEADER | CAPTION_ONLY | BIG_NUMBER
```

### Core Command Patterns
```bash
# Create
uv run gws slides create "Title"
uv run gws slides add-slide $P --layout TITLE_AND_BODY
uv run gws slides read $P                              # Always read before styling

# Text
uv run gws slides insert-text $P $ELEMENT "Content"
uv run gws slides format-text-extended $P $ELEMENT --bold --font "Inter" --size 28 --color "#003366"
uv run gws slides format-paragraph $P $ELEMENT --align START  # Always left-align body

# Backgrounds
uv run gws slides set-background $P $SLIDE --color "#FFFFFF"

# Shapes & structure
uv run gws slides create-shape $P $SLIDE RECTANGLE --x 0 --y 0 --width 914400 --height 120000
uv run gws slides format-shape $P $SHAPE --fill-color "#003366"

# Bullets
uv run gws slides create-bullets $P $ELEMENT --preset BULLET_DISC_CIRCLE_SQUARE

# Speaker notes (REQUIRED on every content slide)
uv run gws slides set-speaker-notes $P $SLIDE "Notes here..."

# Tables (for comparison and structured data)
uv run gws slides insert-table $P $SLIDE 3 3 --x 76200 --y 150000 --width 762000 --height 400000
uv run gws slides style-table-cell $P $TABLE 0 0 --bg-color "#003366"

# Images
uv run gws slides insert-image $P $SLIDE "https://..." --x 76200 --y 200000 --width 400000 --height 300000
```

### EMU Quick Reference (English Metric Units)
```
914400 EMU = 1 inch (full slide width is 9,144,000 EMU = 10")
457200 EMU = 0.5 inch
76200  EMU = 0.083 inch (standard margin)

Standard slide: 9,144,000 × 6,858,000 EMU (10" × 7.5")
Safe area:      7,620,000 × 5,334,000 EMU (after margins)
```

---

## SOURCES & INSPIRATION

This skill synthesizes best practices from:
- Nancy Duarte — *Slide:ology* and *Resonate* (storytelling structure)
- McKinsey & Company — Pyramid Principle (Barbara Minto)
- Edward Tufte — *The Visual Display of Quantitative Information* (data viz)
- IDEO — Human-centered design principles
- Apple — Keynote design standards (whitespace, simplicity)
- andmarios/google-workspace-skill — Google Slides API reference
- nextlevelbuilder/ui-ux-pro-max-skill — Design system generation approach
