namespace hilfreichAPI.Logging;

public class FileLogger :ILogger
{
    protected readonly FileLoggingProvider _provider;
    public FileLogger(FileLoggingProvider provider)
    {
        _provider = provider;
    }

    public IDisposable? BeginScope<TState>(TState state) where TState : notnull
    {
        return null;
    }

    public bool IsEnabled(LogLevel logLevel)
    {
        return logLevel != LogLevel.None;
    }

    public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception? exception, Func<TState, Exception?, string> formatter)
    {
        if (!IsEnabled(logLevel)) { return; }

        string logFolder = _provider.Options.FolderPath;
        if(logFolder.ToLower() == "logs")
            logFolder = Path.Combine(Environment.CurrentDirectory, "logs");
        
        var fullFilePath = Path.Combine(logFolder, _provider.Options.FilePath.Replace("{date}",DateTime.UtcNow.ToString("yyyyMMdd")));
        var logRecord = string.Format("{0} [{1}] {2} {3}", DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss"), logLevel.ToString(), formatter(state, exception),(exception != null ? exception.StackTrace : string.Empty));
        
        using (var streamWriter = new StreamWriter(fullFilePath,true))
        {
            streamWriter.WriteLine(logRecord);
        }
    }
}