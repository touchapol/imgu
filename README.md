# imgu

A lightweight, self-hosted image hosting service built with Next.js 15 and TypeScript.

## Features

- Drag and drop file upload
- Click to upload
- Random URL generation (5-12 characters)
- Support for JPG, PNG, GIF, WebP, SVG, BMP, ICO
- Configurable file size limits
- Clean, modern UI

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun

### Installation

1. Clone the repository

```bash
git clone https://github.com/touchapol/imgu.git
cd imgu
```

2. Install dependencies

```bash
npm install
```

3. Create environment file

```bash
cp .env.example .env
```

4. Configure environment variables

```env
BASE_URL=https://your-domain.com
MAX_FILE_SIZE=10485760
MAX_FILE_SIZE_MB=10
```

5. Create uploads directory

```bash
mkdir -p public/uploads
```

6. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production

Build and start the production server:

```bash
npm run build
npm start
```

## API Endpoints

### Upload Image

```
POST /api/upload
Content-Type: multipart/form-data

Body: file (image)

Response: { "url": "https://your-domain.com/img/abc123.jpg" }
```

### Get Image

```
GET /img/{filename}
GET /api/images/{filename}

Response: Image binary with appropriate Content-Type
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── images/[filename]/   # Image serving API
│   │   └── upload/              # Upload API
│   ├── img/[filename]/          # Short URL image serving
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── icons/                   # SVG icon components
│   ├── ErrorState.tsx
│   ├── LoadingState.tsx
│   ├── SuccessState.tsx
│   └── UploadZone.tsx
├── hooks/
│   └── useFileUpload.ts         # Upload logic hook
└── lib/
    ├── constants.ts             # App constants
    ├── image-service.ts         # Shared image serving
    └── utils.ts                 # Utility functions
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `BASE_URL` | Base URL for generated links | Request origin |
| `MAX_FILE_SIZE` | Maximum file size in bytes | 10485760 (10MB) |
| `MAX_FILE_SIZE_MB` | Maximum file size for error message | 10 |

## License

MIT
