import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			'summary-text': '#5C657E',
    			'select-selected': '#5C657E',
    			'space-gray': '#F4F5FA'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		},
    		backgroundImage: {
    			'button-gradient': 'linear-gradient(90deg, #F5D9DE 0%, #D5E6FF 99%)',
    			'text-gradient': 'linear-gradient(90deg, #CA5FFF 0%, #377DF1 100%)',
    			'card-gradient-purple': 'linear-gradient(177.4deg, rgba(216, 217, 255, 0.6) -2.75%, #D8D9FF 17.64%, #F0F0FF 104.15%)',
    			'card-gradient-blue': 'linear-gradient(177.4deg, rgba(172, 237, 250, 0.6) -2.75%, #ACEDFA 17.64%, rgba(172, 237, 250, 0.3) 104.15%)'
    		},
    		textColor: {
    			transparent: 'transparent'
    		},
    		spacing: {
    			'4.5': '1.125rem',
    			'4.8': '4.8rem',
				'5.3': '5.3rem',
    			'5.5': '-0.95rem',
    			'6.5': '1.375rem'
    		},
    		boxShadow: {
    			'cards-custom-shadow': '0px 18px 12px 0px rgba(0, 0, 0, 0.05)'
    		},
    		borderColor: {
    			'select-border': '#5C657E'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
export default config;
