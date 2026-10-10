using Microsoft.Extensions.Options;

namespace hilfreichAPI.Logging;

[ProviderAlias("FileLogger")]
public class FileLoggingProvider : ILoggerProvider
{
    public readonly FileLoggerOptions Options;

    public FileLoggingProvider(IOptions<FileLoggerOptions> options)
    {
        Options = options.Value;
        
        if(!Directory.Exists(Options.FolderPath))
        {
            Directory.CreateDirectory(Options.FolderPath);
        }
    }

    public void Dispose() { }

    public ILogger CreateLogger(string categoryName)
    {
        return new FileLogger(this);
    }
}