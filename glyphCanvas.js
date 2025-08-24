/**
 * 🌸 Glyph Constellation Canvas
 * Sacred geometry interface for The Grove's glyph constellation
 * 
 * This module renders glyphs in interactive sacred geometry patterns,
 * providing hover tooltips, click events, and seasonal aura visualization.
 */

class GlyphConstellationCanvas {
    constructor(containerId, glyphRegistry) {
        this.container = document.getElementById(containerId);
        this.glyphs = glyphRegistry || [];
        this.activeGlyphs = new Set();
        this.hoveredGlyph = null;
        this.seasonalMode = 'auto'; // auto, spring, summer, autumn, winter
        
        this.init();
    }

    /**
     * Initialize the constellation canvas
     */
    init() {
        if (!this.container) {
            console.error('🌌 Glyph container not found');
            return;
        }

        console.log('🌌 Initializing Glyph Constellation Canvas...');
        this.setupCanvas();
        this.renderConstellation();
        this.bindEvents();
        
        console.log('🌌 Glyph Constellation Canvas initialized');
    }

    /**
     * Setup the SVG canvas for sacred geometry
     */
    setupCanvas() {
        this.container.innerHTML = '';
        
        // Create SVG container
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('width', '100%');
        this.svg.setAttribute('height', '100%');
        this.svg.setAttribute('viewBox', '0 0 800 600');
        this.svg.classList.add('glyph-constellation-svg');
        
        // Add background pattern
        this.addBackgroundPattern();
        
        this.container.appendChild(this.svg);
    }

    /**
     * Add sacred geometry background pattern
     */
    addBackgroundPattern() {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        
        // Create sacred geometry pattern
        const pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
        pattern.setAttribute('id', 'sacred-geometry');
        pattern.setAttribute('patternUnits', 'userSpaceOnUse');
        pattern.setAttribute('width', '40');
        pattern.setAttribute('height', '40');
        
        // Add geometric elements
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', '20');
        circle.setAttribute('cy', '20');
        circle.setAttribute('r', '2');
        circle.setAttribute('fill', 'rgba(255, 255, 255, 0.1)');
        
        pattern.appendChild(circle);
        defs.appendChild(pattern);
        this.svg.appendChild(defs);
        
        // Apply pattern to background
        const background = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        background.setAttribute('width', '100%');
        background.setAttribute('height', '100%');
        background.setAttribute('fill', 'url(#sacred-geometry)');
        background.classList.add('constellation-background');
        
        this.svg.appendChild(background);
    }

    /**
     * Render the glyph constellation in sacred geometry
     */
    renderConstellation() {
        if (!this.glyphs || this.glyphs.length === 0) {
            console.warn('🌌 No glyphs to render');
            return;
        }

        console.log(`🌌 Rendering ${this.glyphs.length} glyphs in constellation...`);
        
        // Calculate positions in sacred geometry pattern
        const positions = this.calculateSacredGeometryPositions(this.glyphs.length);
        
        this.glyphs.forEach((glyph, index) => {
            const position = positions[index];
            this.renderGlyph(glyph, position, index);
        });
        
        console.log('🌌 Constellation rendered successfully');
    }

    /**
     * Calculate positions in sacred geometry pattern
     */
    calculateSacredGeometryPositions(count) {
        const positions = [];
        const centerX = 400;
        const centerY = 300;
        const radius = 200;
        
        if (count === 1) {
            positions.push({ x: centerX, y: centerY });
        } else if (count === 2) {
            positions.push({ x: centerX - radius/2, y: centerY });
            positions.push({ x: centerX + radius/2, y: centerY });
        } else if (count === 3) {
            // Triangle pattern
            const angleStep = (2 * Math.PI) / 3;
            for (let i = 0; i < 3; i++) {
                const angle = i * angleStep - Math.PI / 2;
                positions.push({
                    x: centerX + radius * Math.cos(angle),
                    y: centerY + radius * Math.sin(angle)
                });
            }
        } else {
            // Circular pattern
            const angleStep = (2 * Math.PI) / count;
            for (let i = 0; i < count; i++) {
                const angle = i * angleStep - Math.PI / 2;
                positions.push({
                    x: centerX + radius * Math.cos(angle),
                    y: centerY + radius * Math.sin(angle)
                });
            }
        }
        
        return positions;
    }

    /**
     * Render individual glyph with sacred geometry styling
     */
    renderGlyph(glyph, position, index) {
        const glyphGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        glyphGroup.setAttribute('class', 'glyph-group');
        glyphGroup.setAttribute('data-glyph-id', glyph.id);
        glyphGroup.setAttribute('transform', `translate(${position.x}, ${position.y})`);
        
        // Add seasonal aura
        const aura = this.createSeasonalAura(glyph.season);
        glyphGroup.appendChild(aura);
        
        // Add glyph sigil
        const sigil = this.createGlyphSigil(glyph);
        glyphGroup.appendChild(sigil);
        
        // Add glyph name
        const name = this.createGlyphName(glyph);
        glyphGroup.appendChild(name);
        
        // Add interaction elements
        const interactionArea = this.createInteractionArea(glyph);
        glyphGroup.appendChild(interactionArea);
        
        this.svg.appendChild(glyphGroup);
        
        console.log(`🌌 Glyph ${glyph.name} rendered at position ${index + 1}`);
    }

    /**
     * Create seasonal aura effect
     */
    createSeasonalAura(season) {
        const aura = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        aura.setAttribute('r', '60');
        aura.setAttribute('fill', 'none');
        aura.setAttribute('stroke-width', '3');
        aura.classList.add('seasonal-aura', `seasonal-aura-${season.toLowerCase()}`);
        
        // Add animation
        aura.style.animation = 'pulse 3s ease-in-out infinite';
        
        return aura;
    }

    /**
     * Create glyph sigil
     */
    createGlyphSigil(glyph) {
        const sigil = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        sigil.setAttribute('text-anchor', 'middle');
        sigil.setAttribute('dominant-baseline', 'middle');
        sigil.setAttribute('font-size', '32');
        sigil.setAttribute('class', 'glyph-sigil');
        sigil.textContent = glyph.sigil;
        
        return sigil;
    }

    /**
     * Create glyph name
     */
    createGlyphName(glyph) {
        const name = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        name.setAttribute('text-anchor', 'middle');
        name.setAttribute('dominant-baseline', 'middle');
        name.setAttribute('y', '80');
        name.setAttribute('font-size', '14');
        name.setAttribute('class', 'glyph-name');
        name.textContent = glyph.name;
        
        return name;
    }

    /**
     * Create interaction area for hover and click
     */
    createInteractionArea(glyph) {
        const area = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        area.setAttribute('r', '70');
        area.setAttribute('fill', 'transparent');
        area.setAttribute('cursor', 'pointer');
        area.setAttribute('class', 'glyph-interaction-area');
        area.setAttribute('data-glyph-id', glyph.id);
        
        return area;
    }

    /**
     * Bind interaction events
     */
    bindEvents() {
        // Hover events
        this.svg.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains('glyph-interaction-area')) {
                const glyphId = e.target.getAttribute('data-glyph-id');
                this.showGlyphTooltip(glyphId, e);
            }
        });

        this.svg.addEventListener('mouseout', (e) => {
            if (e.target.classList.contains('glyph-interaction-area')) {
                this.hideGlyphTooltip();
            }
        });

        // Click events
        this.svg.addEventListener('click', (e) => {
            if (e.target.classList.contains('glyph-interaction-area')) {
                const glyphId = e.target.getAttribute('data-glyph-id');
                this.activateGlyph(glyphId);
            }
        });
    }

    /**
     * Show glyph tooltip with detailed information
     */
    showGlyphTooltip(glyphId, event) {
        const glyph = this.glyphs.find(g => g.id === glyphId);
        if (!glyph) return;

        this.hideGlyphTooltip(); // Remove existing tooltip
        
        const tooltip = document.createElement('div');
        tooltip.className = 'glyph-tooltip';
        tooltip.innerHTML = `
            <div class="tooltip-header">
                <span class="tooltip-sigil">${glyph.sigil}</span>
                <span class="tooltip-name">${glyph.name}</span>
            </div>
            <div class="tooltip-details">
                <div><strong>Season:</strong> ${glyph.season}</div>
                <div><strong>Emotion:</strong> ${glyph.emotion}</div>
                <div><strong>Archetype:</strong> ${this.getArchetypeName(glyph.emotion)}</div>
                <div><strong>Mutation Path:</strong> ${glyph.mutation_path}</div>
            </div>
            <div class="tooltip-description">${glyph.description}</div>
        `;
        
        tooltip.style.position = 'absolute';
        tooltip.style.left = event.pageX + 10 + 'px';
        tooltip.style.top = event.pageY - 10 + 'px';
        tooltip.style.zIndex = '1000';
        
        document.body.appendChild(tooltip);
        this.currentTooltip = tooltip;
        
        console.log(`🌌 Tooltip shown for ${glyph.name}`);
    }

    /**
     * Hide glyph tooltip
     */
    hideGlyphTooltip() {
        if (this.currentTooltip) {
            this.currentTooltip.remove();
            this.currentTooltip = null;
        }
    }

    /**
     * Get archetype name from emotion
     */
    getArchetypeName(emotion) {
        const archetypes = {
            'Clarity': 'The Seer',
            'Renewal': 'The Catalyst',
            'Joy': 'The Radiant',
            'Grief': 'The Transformer',
            'Intuition': 'The Dreamer',
            'Hope': 'The Visionary',
            'Protection': 'The Guardian'
        };
        return archetypes[emotion] || 'The Unknown';
    }

    /**
     * Activate glyph and trigger mutation
     */
    activateGlyph(glyphId) {
        const glyph = this.glyphs.find(g => g.id === glyphId);
        if (!glyph) return;

        console.log(`🌌 Activating glyph: ${glyph.name}`);
        
        // Add to active glyphs
        this.activeGlyphs.add(glyphId);
        
        // Visual feedback
        const glyphGroup = this.svg.querySelector(`[data-glyph-id="${glyphId}"]`);
        if (glyphGroup) {
            glyphGroup.classList.add('active');
        }
        
        // Trigger mutation if available
        if (window.startConsciousnessMutation) {
            try {
                window.startConsciousnessMutation(glyph);
                console.log(`🌌 Mutation triggered for ${glyph.name}`);
            } catch (error) {
                console.error('🌌 Error triggering mutation:', error);
            }
        }
        
        // Log to codex if available
        if (window.logToCodex) {
            window.logToCodex(`🌸 Glyph ${glyph.name} activated - ${glyph.emotion} resonance initiated`);
        }
        
        // Emit custom event
        const event = new CustomEvent('glyphActivated', {
            detail: { glyph, glyphId }
        });
        document.dispatchEvent(event);
    }

    /**
     * Update seasonal mode
     */
    updateSeasonalMode(mode) {
        this.seasonalMode = mode;
        this.renderConstellation();
        console.log(`🌌 Seasonal mode updated to: ${mode}`);
    }

    /**
     * Add new glyph to constellation
     */
    addGlyph(glyph) {
        this.glyphs.push(glyph);
        this.renderConstellation();
        console.log(`🌌 New glyph added: ${glyph.name}`);
    }

    /**
     * Remove glyph from constellation
     */
    removeGlyph(glyphId) {
        const index = this.glyphs.findIndex(g => g.id === glyphId);
        if (index > -1) {
            this.glyphs.splice(index, 1);
            this.renderConstellation();
            console.log(`🌌 Glyph removed: ${glyphId}`);
        }
    }

    /**
     * Get constellation data
     */
    getConstellationData() {
        return {
            glyphs: this.glyphs,
            activeGlyphs: Array.from(this.activeGlyphs),
            seasonalMode: this.seasonalMode,
            totalGlyphs: this.glyphs.length
        };
    }
}

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GlyphConstellationCanvas;
}

// Global registration for browser use
if (typeof window !== 'undefined') {
    window.GlyphConstellationCanvas = GlyphConstellationCanvas;
}
