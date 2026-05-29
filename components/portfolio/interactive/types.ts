export type FlowStatus =
  | "idle"
  | "submitting"
  | "booting"
  | "planning"
  | "scaffolding"
  | "installing"
  | "starting_dev_server"
  | "generating_preview"
  | "completed";

export type PreviewPhase =
  | "idle"
  | "booting"
  | "scaffolding"
  | "generating"
  | "revealing"
  | "completed";

export type TerminalLineType =
  | "text"
  | "muted"
  | "command"
  | "output"
  | "success"
  | "warning"
  | "error"
  | "json"
  | "code"
  | "spacer";

export interface TerminalLine {
  id: string;
  type: TerminalLineType;
  content?: string;
  lines?: string[];
  delayMs: number;
  phase?: FlowStatus;
  previewPhase?: PreviewPhase;
  className?: string;
  shouldAutoScroll?: boolean;
}

export interface SequenceState {
  visibleLines: TerminalLine[];
  status: FlowStatus;
  previewPhase: PreviewPhase;
  isRunning: boolean;
  isCompleted: boolean;
}
