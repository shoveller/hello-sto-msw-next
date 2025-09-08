# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production with Turbopack  
- `pnpm start` - Start production server

### Code Quality (Run after making changes)
- `pnpm type:check` - TypeScript type checking
- `pnpm prettier` - Format code with Prettier
- `pnpm eslint` - Lint and fix with ESLint
- `pnpm format` - Run type:check + prettier + eslint sequentially

### API Client
- `pnpm api` - Generate TypeScript API client from PokeAPI OpenAPI spec

## Architecture

### Tech Stack
- **Next.js 15** with App Router and Turbopack
- **React 19** with server/client component separation
- **TypeScript 5** with strict functional programming rules
- **API Client**: Auto-generated from OpenAPI + ky HTTP client
- **State Management**: TanStack Query

### Project Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/api/` - API client configuration and auto-generated client
- `src/types/` - TypeScript type definitions

## Code Style (Enforced by ESLint)

### Functional Programming Rules
- **No `let` or `var`** - Use `const` only
- **No loops** - Use `map()`, `filter()`, `reduce()` instead of `for`/`while`
- **No interfaces** - Use `type` declarations instead
- **No ternary operators** - Use `if` statements for conditional logic
- **No parameter reassignment** - Parameters are immutable
- **Max nesting depth**: 2 levels

### Import Order (Auto-sorted)
1. React imports
2. Next.js imports  
3. Built-in modules
4. Third-party modules
5. CSS/SCSS files
6. Local modules (relative paths)

### Formatting
- No semicolons
- Single quotes
- 2-space indentation
- No trailing commas
- LF line endings

## Configuration Notes
- Next.js configured for `standalone` output with unoptimized images
- API client auto-generated from PokeAPI OpenAPI specification
- Husky git hooks configured for pre-commit quality checks
- Package manager: pnpm (required)