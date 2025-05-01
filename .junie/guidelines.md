# Guitar Fret Wizard Development Guidelines

This document provides essential information for developers working on the Guitar Fret Wizard project.

## Build/Configuration Instructions

### Prerequisites
- Node.js (v20 or later recommended)
- npm (comes with Node.js)

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm ci
   ```

### Development
To start the development server with hot module replacement (HMR):
```bash
npm run dev
```

The development server will be available at `http://localhost:5173` by default.

### Building for Production
To build the project for production:
```bash
npm run build
```

This will:
1. Run TypeScript compiler (`tsc -b`)
2. Build the project with Vite (`vite build`)

The production-ready files will be output to the `dist` directory.

### Preview Production Build
To preview the production build locally:
```bash
npm run preview
```

## Testing Information

### Testing Framework
This project uses Vitest as the testing framework, which is designed to work seamlessly with Vite projects.

### Testing Configuration
The testing configuration is in a separate `vitest.config.ts` file at the root of the project. This keeps the testing configuration separate from the Vite build configuration.

### Running Tests
To run all tests once:
```bash
npm test
```

To run tests in watch mode (useful during development):
```bash
npm run test:watch
```

### Test Structure
- Tests are co-located with the code they test (e.g., component tests are in the same directory as the components)
- Test files should follow the naming convention: `*.test.ts` or `*.test.tsx`
- The test setup file is located at `src/setupTests.ts`

#### Benefits of Co-located Tests
- Tests are located next to the code they're testing, making them easier to find
- When you modify a component or utility, the test is right there to update as well
- It's clearer which components have tests and which don't
- The pattern follows modern React project conventions

### Writing Tests

#### Example: Testing a Utility Function

```typescript
// src/utils/toOrdinal.test.ts
import { describe, it, expect } from 'vitest';
import { toOrdinal } from './toOrdinal';

describe('toOrdinal function', () => {
  it('converts string numbers to ordinal strings', () => {
    expect(toOrdinal('1')).toBe('1st');
    expect(toOrdinal('2')).toBe('2nd');
    // More assertions...
  });

  it('throws an error for invalid inputs', () => {
    expect(() => toOrdinal('0')).toThrow();
    // More assertions...
  });
});
```

#### Example: Testing a React Component

```typescript
// src/components/RadioLabel.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RadioLabel } from './RadioLabel';

describe('RadioLabel component', () => {
  it('renders with the correct content', () => {
    // Using JSX to render the component
    render(RadioLabel({ htmlFor: "test-id", content: "Test Content" }));
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
```

## Additional Development Information

### Project Structure
- `src/`: Source code
  - `assets/`: Static assets like SVG files
  - `components/`: Reusable React components and their tests
  - `utils/`: Utility functions and their tests
  - `setupTests.ts`: Test setup file
- `public/`: Public assets that will be copied to the build directory
- `dist/`: Build output (generated when building the project)

### Code Style
- The project uses ESLint for code linting
- Run the linter with:
  ```bash
  npm run lint
  ```

### TypeScript
- The project uses TypeScript for type safety
- There are separate TypeScript configurations:
  - `tsconfig.json`: Base configuration
  - `tsconfig.app.json`: Application-specific configuration
  - `tsconfig.node.json`: Node.js-specific configuration

### Deployment
The project is configured for deployment to GitHub Pages using GitHub Actions. The workflow is defined in `.github/workflows/deploy.yaml`.

### Best Practices
1. **Component Organization**:
   - Extract reusable UI elements into separate components
   - Keep components focused on a single responsibility

2. **State Management**:
   - Use React hooks for state management
   - Consider extracting complex state logic into custom hooks

3. **Testing**:
   - Write tests for utility functions and components
   - Focus on testing behavior rather than implementation details

4. **Code Organization**:
   - Extract utility functions to separate files in the `utils/` directory
   - Group related components together
