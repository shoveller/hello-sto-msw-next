// src/types/css.d.ts
declare module '*.css' {
  const styles: { [key: string]: string }
  export default styles
}

declare module '*.scss' {
  const styles: { [key: string]: string }
  export default styles
}

declare module '*.sass' {
  const styles: { [key: string]: string }
  export default styles
}

declare module '*.less' {
  const styles: { [key: string]: string }
  export default styles
}

declare module '*/globals.css' {
  const styles: any
  export default styles
}
