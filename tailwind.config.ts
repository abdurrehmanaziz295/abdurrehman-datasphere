import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Cyberpunk Neon Colors
				neon: {
					cyan: 'hsl(var(--neon-cyan))',
					pink: 'hsl(var(--neon-pink))',
					purple: 'hsl(var(--neon-purple))',
					green: 'hsl(var(--neon-green))',
					orange: 'hsl(var(--neon-orange))',
					blue: 'hsl(var(--neon-blue))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(100px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'typing': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'blink': {
					'0%, 50%': { borderColor: 'transparent' },
					'51%, 100%': { borderColor: 'hsl(var(--primary))' }
				},
				// Cyberpunk Animations
				'cyber-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--neon-cyan) / 0.5)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--neon-cyan) / 0.8), 0 0 60px hsl(var(--neon-pink) / 0.3)'
					}
				},
				'matrix-rain': {
					'0%': {
						transform: 'translateY(-100vh)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(100vh)',
						opacity: '0'
					}
				},
				'glitch-text': {
					'0%, 90%, 100%': {
						transform: 'translate(0)'
					},
					'20%': {
						transform: 'translate(-2px, 2px)'
					},
					'40%': {
						transform: 'translate(-2px, -2px)'
					},
					'60%': {
						transform: 'translate(2px, 2px)'
					},
					'80%': {
						transform: 'translate(2px, -2px)'
					}
				},
				'neon-flicker': {
					'0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
						textShadow: '0 0 10px hsl(var(--neon-cyan)), 0 0 20px hsl(var(--neon-cyan)), 0 0 40px hsl(var(--neon-cyan))'
					},
					'20%, 24%, 55%': {
						textShadow: 'none'
					}
				},
				'cyber-slide': {
					'0%': {
						transform: 'translateX(-100%) skewX(-20deg)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0) skewX(0deg)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-up': 'fade-up 0.8s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'slide-up': 'slide-up 1s ease-out',
				'typing': 'typing 3.5s steps(40, end)',
				'blink': 'blink 1s step-end infinite',
				// Cyberpunk Animations
				'cyber-pulse': 'cyber-pulse 2s ease-in-out infinite',
				'matrix-rain': 'matrix-rain 20s linear infinite',
				'glitch-text': 'glitch-text 1s ease-in-out infinite',
				'neon-flicker': 'neon-flicker 3s linear infinite',
				'cyber-slide': 'cyber-slide 0.8s ease-out'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-gradient': 'linear-gradient(135deg, hsl(var(--neon-cyan)) 0%, hsl(var(--neon-purple)) 50%, hsl(var(--neon-pink)) 100%)',
				'card-gradient': 'linear-gradient(135deg, hsl(var(--card) / 0.8) 0%, hsl(var(--card) / 0.6) 100%)',
				'cyber-grid': `
					linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
					linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
				`,
				'neon-glow': 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.3) 0%, transparent 70%)'
			},
			backgroundSize: {
				'grid': '50px 50px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;